import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
	private ingredients : Ingredient[] = 
	[
		new Ingredient('sale', 4),
		new Ingredient('pepe', 3)
	];

	onAddIngredient = new EventEmitter<Ingredient[]>();

	addIngredient(ingredient)
	{
	  this.ingredients.push(ingredient);
	  this.onAddIngredient.emit(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[])
	{
      this.ingredients.push(...ingredients);  // i tre punti trasformano l'array in lista
	  this.onAddIngredient.emit(this.ingredients.slice());
	}

	getIngredients()
	{
		return this.ingredients.slice();
	}

}