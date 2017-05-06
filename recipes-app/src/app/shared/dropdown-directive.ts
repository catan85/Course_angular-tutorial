import { Directive, OnInit, HostListener, HostBinding } from '@angular/core'

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {

	@HostBinding('class.open') isOpen = false;

	@HostListener('click') onClick (eventData:Event)
	{
		this.isOpen = !this.isOpen;
	}

}