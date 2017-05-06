import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() onRecipeSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe ("Ricetta 1","Una fantastica ricetta", "https://vignette2.wikia.nocookie.net/logopedia/images/2/2d/Ubuntu-old.png"),
		new Recipe ("Ricetta 2","Na ricetta dimmerda", "https://angular.io/resources/images/logos/angular/angular.png")
	];

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick(recipe)
  {
    this.onRecipeSelected.emit(recipe);
  }

}
