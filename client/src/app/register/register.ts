import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  model: any = {};

  constructor() {}

  ngOnInit(): void {}

  register() {
    console.log(this.model);
  }

  cancel() {
    console.log('cancelled');
  }
}
