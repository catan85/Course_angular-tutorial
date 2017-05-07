import { Component } from '@angular/core';
import { UsersService } from './users.service'
import { CounterService } from './counter.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent  {

  counter : number;

  constructor(private counterService : CounterService )
  {

  }

}
