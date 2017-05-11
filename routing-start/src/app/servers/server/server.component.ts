import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params , Router, Data} from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
  		private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
        );

  	//const serverNumber = +this.route.snapshot.params['id'];
    //this.server = this.serversService.getServer(serverNumber);

    //this.route.params.subscribe(
    //	(params: Params) => {
    //		const serverNumber = +params['id'];
		//    this.server = this.serversService.getServer(serverNumber);
    //	});

  }

  onEdit()
  {
    // E' sufficiente usare il relative path edit perche' siamo gia' nel
    // path corretto
    // query params handling preserve serve a mantenere i query parameter nonostante si navighi nell'edit
    this.router.navigate(["edit"], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
