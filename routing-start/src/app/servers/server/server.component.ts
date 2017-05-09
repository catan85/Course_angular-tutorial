import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
  		private route: ActivatedRoute) { }

  ngOnInit() {
  	const serverNumber = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(serverNumber);

    this.route.params.subscribe(
    	(params: Params) => {
    		const serverNumber = +params['id'];
		    this.server = this.serversService.getServer(serverNumber);
    	});

  }

}
