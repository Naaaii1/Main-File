import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const url = 'http://localhost:8000/api/V1/login'; // Update the URL to the correct endpoint

    return this.http.post(url, { email, password });
  }
}
