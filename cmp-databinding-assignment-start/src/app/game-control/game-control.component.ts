import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit{

	timer;
	counter : number;
	pippo : string;

	@Output() NewGameData = new EventEmitter<{currentNumber: number}>();

	onStartClick(event: EventListener)
	{
		// si passa this come argomento in modo che l'istanza possa accedere
		// alle variabili dell'oggetto padre
		this.timer = setInterval(this.timerTick, 500, this); 
	}

	onStopClick(event: EventListener)
	{
		clearTimeout(this.timer);
	}

	timerTick(ref)
	{
		ref.counter++;
		
		console.log("Timer tick: " + ref.counter.toString());
		ref.NewGameData.emit({currentNumber: ref.counter});
	}

  	constructor() {
  		this.counter = 0;
  	}

  	ngOnInit() {
  }

}
