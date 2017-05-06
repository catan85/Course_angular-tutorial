import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

	ingredients :Ingredient[] = 
	[
		new Ingredient('sale', 4),
		new Ingredient('pepe', 3)
	];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient)
  {
    this.ingredients.push(ingredient);
  }

}
