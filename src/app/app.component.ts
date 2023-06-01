import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private activatedSubscription: Subscription;
  userActivated: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    /* this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    }) */

    this.activatedSubscription =this.userService.activatedSubject.subscribe(didActivate => {
      this.userActivated = didActivate;
    })
  }

  ngOnDestroy(): void {
    this.activatedSubscription.unsubscribe();
  }
}
