import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipesService {

	constructor(private shoppingListService : ShoppingListService)
	{}

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = 
	[
		new Recipe (
			"Pasta al pomodoro",
			"Una scialbissima pasta al pomodoro", 
			"http://images.lacucinaitaliana.it/wp-content/uploads/2015/07/spaghetti-al-pomodoro-ricetta.jpg",
			[
				new Ingredient('pasta', 100),
				new Ingredient('pomodoro', 1)
			]),
		new Recipe (
			"Toast",
			"Un fantastico toassst", 
			"http://www.bovis.it/resources/bovis.it/upload/Recipe_Recipe_7_toast.jpg",
			[
				new Ingredient('pancarrè', 2),
				new Ingredient('prosciutto', 1),
				new Ingredient('sottiletta',1)
			])
	];

	getRecipes()
	{
		return this.recipes.slice(); //ritorna una copia (slice)
	}

	getRecipe(id: number)
	{
		return this.recipes[id];
	}

	addIngredientsToShoppingList(ingredients :Ingredient[])
	{
		this.shoppingListService.addIngredients(ingredients);
	}

}
