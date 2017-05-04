import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	currentView :string;

	constructor() {
  		this.currentView = '';
  	}

  	changeView(currentView)
  	{
  		console.log("view changed: " + currentView);
  		this.currentView = currentView;
  	}

}
