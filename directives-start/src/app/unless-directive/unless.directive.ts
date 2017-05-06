import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
	// per una directive strutturale il nome dell'input deve coincidere
	// con il nome della directive
	@Input('appUnless') set unless(condition: boolean) {
		if (!condition){
			this.vcRef.createEmbeddedView(this.templateRef);
		}else{
			this.vcRef.clear();
		}
	}
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
