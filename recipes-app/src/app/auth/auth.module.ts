import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        AuthRoutingModule
    ],
    
})
export class AuthModule {
    
}