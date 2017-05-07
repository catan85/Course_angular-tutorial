import {Injectable, EventEmitter} from '@angular/core';
import { LoggingService } from './logging.service';

// Injectable può ricevere altri servizi (si può usare altri servizi al suo interno)
@Injectable()
export class AccountService {
	accounts = [
		{
			name: 'test 1',
			status: 'active'
		},
		{
			name: 'test 2',
			status: 'inactive'
		}
	]

	constructor(
		private loggingService : LoggingService
		){};

	// evento triggerabile da fuori
	statusUpdated = new EventEmitter<string>();

	addAccount(name: string, status: string){
		this.accounts.push({name: name, status :status});
		this.loggingService.log("Added account: " + name);
	}

	updateStatus(id: number, status: string){
		this.accounts[id].status = status;
		this.loggingService.log("Updated status: " + status);
	}


}
