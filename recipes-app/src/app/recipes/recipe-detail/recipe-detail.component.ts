import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

	  recipe : Recipe;
    id: number;

    constructor(private recipesService: RecipesService,
      private activatedRoute : ActivatedRoute
    ) { }

    ngOnInit() { 
      //const id = this.activatedRoute.snapshot.params['id'];
      this.activatedRoute.params.subscribe(
        (params:Params)=>{ 
          this.id = +params['id']; 
          this.recipe = this.recipesService.getRecipe(this.id);
        }
      )
  	}

    toShoppingList(){
      this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

}
