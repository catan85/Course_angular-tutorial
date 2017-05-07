import { Component } from '@angular/core';
import {AccountService } from '../account.service';
//import {LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(
    private accountService : AccountService
    //,private loggingService : LoggingService
    ) {
        // iscrizione ad un evento del servizio
        this.accountService.statusUpdated.subscribe(
          (status: string) => alert('New Status: ' + status)
        );
      };

  onCreateAccount(accountName: string, accountStatus: string) {

    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.log(accountName + '; status: ' + accountStatus);
  }
}
