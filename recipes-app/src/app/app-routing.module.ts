import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
{ path: '', redirectTo:'/recipes', pathMatch:'full' },
{ path: 'recipes', component: RecipesComponent },
{ path: 'shopping-list', component: ShoppingListComponent },
{ path: 'not-found', component: PageNotFoundComponent },
{ path: '**', redirectTo: '/not-found'},

];

@NgModule({
	imports: [			
		RouterModule.forRoot(appRoutes) 				
		//use hash solo per vecchi browser o server che redirectano a 404
		//RouterModule.forRoot(appRoutes, {useHash: true}) 
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}