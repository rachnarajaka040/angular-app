import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor() {}

  onLogin() {
    // Get the signup data from localStorage
    const storedData = localStorage.getItem('signupData');

    if (storedData) {
      const signupData = JSON.parse(storedData);

      // Check if the entered email and password match the stored signup data
      if (this.email === signupData.email && this.password === signupData.password) {
        // If login is successful, show an alert message
        alert('Login successful!');
      } else {
        // If login fails, show an error message
        this.errorMessage = 'Invalid credentials. Please try again.';
      }
    } else {
      // If no signup data found, show an error message
      this.errorMessage = 'Signup data not found. Please sign up first.';
    }
  }
}
