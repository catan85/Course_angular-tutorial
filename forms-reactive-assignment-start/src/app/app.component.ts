import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myForm : FormGroup;

  ngOnInit()
  {
    this.myForm = new FormGroup({
      'projectName' : new FormControl(null, [Validators.required], [this.invalidProjectName]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'status' : new FormControl(null)
    })
  }

  OnSubmit()
  {
    console.log(this.myForm);
  }


  // Sync validator
  // invalidProjectName(control: FormControl):{[s:string]:boolean}
  // {
  //   if (control.value != 'test')
  //   {
  //     return {'invalidProjectName': true};
  //   }
  //   return null
  // }

  // Async validator
  invalidProjectName(control: FormControl): Promise<any> | Observable<any>
  {
    const promise = new Promise<any>((resolve,reject) => {
      setTimeout(()=>{
        if (control.value === 'test'){
          resolve({'invalidProjectName': true});
        }else{
          resolve(null);
        }
      },2000);
    });
    return promise;
  }

}
