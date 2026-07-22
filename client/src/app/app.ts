import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('The Dating App');
  users: any[] = [];

  private platformId = inject(PLATFORM_ID);

  isBrowser = isPlatformBrowser(this.platformId);
  // isBrowser: boolean;

  constructor(
    private http: HttpClient,
    // @Inject(PLATFORM_ID) private platformId: Object, // Client side configuration added here
  ) {
    // this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit() {
    // Client side config condition
    if (this.isBrowser) {
      this.getUsers();
    }
  }

  getUsers() {
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: (response: any) => {
        console.log('response', response);
        this.users = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
