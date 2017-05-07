import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

	@Input() recipeData : Recipe;

	name = 'none';
	description = 'none';
	imagePath = 'none';

    constructor(private recipesService : RecipesService) {
    }

    ngOnInit() {
    	this.name = this.recipeData.name;
    	this.description = this.recipeData.description;
    	this.imagePath = this.recipeData.imagePath;
  	}

    recipeSelected()
    {
      this.recipesService.recipeSelected.emit(this.recipeData);
    }

}
