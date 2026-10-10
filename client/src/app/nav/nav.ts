import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { User } from '../_models/user';
import { Observable } from 'rxjs';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, BsDropdownModule, AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {
  model: any = {};
  // loggedIn: boolean = false;
  // currentUser$!: Observable<User>;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    // this.getCurrentUser();
    // this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
        // this.loggedIn = true;
        this.router.navigateByUrl('/members');
      },
      error: (error) => {
        console.error(error);
        this.toastr.error(error.error);
      },
    });
  }

  logout() {
    this.accountService.logout();
    // this.loggedIn = false;
    this.router.navigateByUrl('/');
  }

  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe({
  //     next: (user) => {
  //       this.loggedIn = !!user;
  //     },
  //     error: (error) => {
  //       console.error(error);
  //     },
  //   });
  // }
}
