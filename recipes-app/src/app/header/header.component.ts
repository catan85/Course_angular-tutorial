import {Component, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector : 'app-header',
	templateUrl : './header.component.html'
})
export class HeaderComponent
{

	constructor(private router : Router,
		private activatedRoute : ActivatedRoute)
	{
	}

	//@Output() currentViewChanged = new EventEmitter<string>();

	onRecipesClick(event)
	{
		//this.currentViewChanged.emit("recipes");
		this.router.navigate(['recipes'], {relativeTo: this.activatedRoute});
	}

	onShoppingListClick(event)
	{
		//this.currentViewChanged.emit("ingredients");
		this.router.navigate(['shopping-list'], {relativeTo: this.activatedRoute});
	}
}