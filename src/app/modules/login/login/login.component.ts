import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: string;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.error = '';
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  login() {
    if (this.form.valid) {
      this.http.post('http://localhost:8000/api/V1/login', {
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value
      }).subscribe((response: any) => {
        console.log('Response:', response); // Log the response object for inspection
  
        if (response.error === false && response.error_code === 200) {
          console.log('Login Successful');
          console.log('Data:', response.data);
  
          // The login was successful. Store the user's login information in the browser's local storage.
          // localStorage.setItem('user', JSON.stringify(response.data.user_info));
  
          // Redirect the user to the dashboard page.
          window.location.href = '/dashboard';
        } else {
          // Unauthorized user or other error. Display an error message to the user.
          //this.error = 'Login failed. Please check your credentials.';
          alert("Login failed. Please check your credentials.")
        }
      }, (error) => {
        console.error('Login Error:', error);
        //this.error = 'An error occurred during login. Please try again later.';
        alert("An error occurred during login. Please try again later.")
      });
    }
  }
  
}
