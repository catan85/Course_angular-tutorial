import {EventEmitter, Output} from '@angular/core'

export class CounterService {
	counter : number = 0;


	@Output() counterIncreased = new EventEmitter<number>();

	increment(){
		this.counter++;
		this.counterIncreased.emit(this.counter);
	}
}