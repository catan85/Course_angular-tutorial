import { Component, OnInit, ViewChild, ElementRef , Output, EventEmitter} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, Output {

	@Output('onAddIngredient') onAddIngredient = new EventEmitter<Ingredient>();

	@ViewChild('nameInput') nameInput : ElementRef;
	@ViewChild('amountInput') amountInput : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddClick()
  {
  	let name :string = this.nameInput.nativeElement.value;
  	let amount :number = this.amountInput.nativeElement.value;

  	this.onAddIngredient.emit(new Ingredient(name, amount));
  }

}
