import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
  			private router: Router,
  			private route : ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload()
  {
  	
  	// A differenza del template, nel module, il path relativo non é automatico
  	// bisogna iniettarlo tramite route e passare l'argomento RelativeTo
  	//this.router.navigate(['servers'], {relativeTo: this.route});

  }

}
