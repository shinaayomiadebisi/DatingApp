import { isPlatformBrowser, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('The Dating App');

  users: any;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object, // Client side configuration added here
  ) {}
  ngOnInit() {
    console.log('Browser?', isPlatformBrowser(this.platformId));

    // Client side config condition
    if (isPlatformBrowser(this.platformId)) {
      this.getUsers();
    }
  }

  getUsers() {
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
