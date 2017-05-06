import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
	selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
	// dicendo private è come assegnarlo al this
	constructor(private elementRef: ElementRef){
	}

	ngOnInit()
	{
		this.elementRef.nativeElement.style.backgroundColor = 'green';
	}
}