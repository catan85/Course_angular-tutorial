import {Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector : 'app-header',
	templateUrl : './header.component.html'
})
export class HeaderComponent
{
	@Output() currentViewChanged = new EventEmitter<string>();

	onRecipesClick(event)
	{
		this.currentViewChanged.emit("recipes");
	}

	onIngredientsClick(event)
	{
		this.currentViewChanged.emit("ingredients");
	}
}