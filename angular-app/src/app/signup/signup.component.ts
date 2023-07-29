import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData = { fullName: '', email: '', password: '' };

  constructor(private router: Router) {}

  onSignUp() {
    // Handle the form submission here
    // For example, you can save the user data or perform an API call for signup

    // After successful signup, store the user's signup data in localStorage
    localStorage.setItem('signupData', JSON.stringify(this.signupData));

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}


