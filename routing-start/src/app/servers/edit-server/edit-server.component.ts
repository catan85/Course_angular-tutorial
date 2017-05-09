import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // lettura dei dati dalla route iniettata
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    // ci si può anche iscrivere all'evento
    // il codice da eseguire andrebbe fatto in linq tra le tonde
    this.route.queryParams.subscribe(); 
    this.route.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
