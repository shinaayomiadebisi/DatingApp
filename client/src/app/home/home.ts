import { Component, OnInit } from '@angular/core';
import { Register } from '../register/register';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  registerMode = false;

  constructor() {}

  ngOnInit(): void {}

  registerToggle() {
    this.registerMode = !this.registerMode;
  }
}
