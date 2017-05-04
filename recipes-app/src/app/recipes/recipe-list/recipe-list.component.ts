import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe ("recipe 1","test description", "https://incucinaconbiosec.files.wordpress.com/2013/05/ricetta-funghi.jpg"),
		new Recipe ("recipe 2","test description", "https://incucinaconbiosec.files.wordpress.com/2013/05/ricetta-funghi.jpg")
	];

  constructor() { }

  ngOnInit() {
  }

}
