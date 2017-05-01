import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
  `
  	.overFive{color : white;}
  `
  ]
})
export class AppComponent {
	displayPass = false;
	clicks = []
	buttonClick()
	{
		this.displayPass = !this.displayPass;	
		this.clicks.push((new Date()).toString());
		
	}

	getBackground(click)
	{

		if (click > this.clicks[3])
		{
			return 'blue';
		}
	}
	
	getForeground(click)
	{
		if (this.clicks.length > 4)
		{
			if (click < this.clicks[4])
			{
				return 'white';
			}
		}
		return 'blue';
	}

}


