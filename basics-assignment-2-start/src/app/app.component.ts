import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	emptyUsername = true;
	username = ""

	checkEmptyField(event: Event)
	{
		if ((<HTMLInputElement>event.target).value == '')
		{
			this.emptyUsername = true;
		}else{
			this.emptyUsername = false;
		}
	}

	onClick()
	{
		this.username = "";
		this.emptyUsername = true;
	}
}
