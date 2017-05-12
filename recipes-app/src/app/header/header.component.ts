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

}