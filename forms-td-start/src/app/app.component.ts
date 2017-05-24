import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion='teacher';

  genders = [ 'male', 'female']

  user = {
    name: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  }

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // in questo modo sovrasrivo tutte le proprietá del form
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: 'a@b.it'
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    // in questo modo posso scrivere solo alcune proprietá
    this.signupForm.form.patchValue({
      userData:{
          username: 'suggestedName'
      }
    });

  }

  onSubmit(){
      this.submitted = true;
      this.user.name = this.signupForm.value.userData.username;
      this.user.email = this.signupForm.value.userData.email;
      this.user.secret = this.signupForm.value.secret;
      this.user.questionAnswer = this.signupForm.value.questionAnswer;
      this.user.gender = this.signupForm.value.gender;
      
      this.signupForm.reset();
}


// onSubmit(form: NgForm){
//      console.log(form.value["username"]);
// }


 }
