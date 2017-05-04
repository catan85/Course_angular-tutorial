import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

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

    constructor() {
    }

    ngOnInit() {
    	this.name = this.recipeData.name;
    	this.description = this.recipeData.description;
    	this.imagePath = this.recipeData.imagePath;
  	}

}
