import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	evenNumber: number;
	oddNumber: number;

	numbers= [];

	OnNewGameData(data : {currentNumber :number}){
		this.numbers.push(data.currentNumber);
	}

	isEven(number)
	{
		return number % 2 == 0;
	}

	isOdd(number)
	{
		return number % 2 != 0;
	}
	constructor() { }
}
