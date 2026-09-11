import { Component, OnInit } from '@angular/core';
import { Register } from '../register/register';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  // standalone: true,
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  getUsers() {
    this.http.get('https://localhost:5000/api/users').subscribe((users) => (this.users = users));
  }
}
