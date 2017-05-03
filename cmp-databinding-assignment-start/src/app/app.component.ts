import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	evenNumber: number;
	oddNumber: number;

	OnNewGameData(data : {currentNumber :number}){
		if (data.currentNumber % 2 == 0)
		{
			this.evenNumber = data.currentNumber;
		}else{
			this.oddNumber = data.currentNumber;
		}
	}

	constructor() { }
}
