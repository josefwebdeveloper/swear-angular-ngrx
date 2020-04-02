import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Router} from '@angular/router';
import {SetCurrentUser} from '../../store/actions/auth.actions';
import {User} from '../../models/user';
import * as fromAuth from '../../store/reducers/auth.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  curUser$: Observable<User>;
  @ViewChild('drawer', {read: ElementRef}) drawer: ElementRef;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>,
    private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit(): void {
    this.curUser$ = this.store.select(fromAuth.selectCurrentUser);
  }

  goToAuth() {
    console.log(this.drawer);
    this.drawer.nativeElement.toggle();
    this.router.navigate(['/auth']);
  }

  cho() {
    this.authService.whoami().subscribe(d => {
      console.log(d);
    });
  }

  onClick() {
    if (this.authService.token) {
      this.authService.token = null;
      this.store.dispatch(new SetCurrentUser(null));
    }
    console.log('logout');
    this.router.navigate(['/auth']);

  }
}
