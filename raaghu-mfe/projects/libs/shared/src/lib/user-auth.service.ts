import { Inject, Injectable, OnInit, Optional } from '@angular/core';
import {
  mergeMap as _observableMergeMap,
  catchError as _observableCatch,
} from 'rxjs/operators';
import {
  throwError as _observableThrow,
  of as _observableOf,
  Observable,
  of,
  Subject,
} from 'rxjs';
// import { SendPasswordResetCodeInput } from './service-proxies';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { AppSessionService } from './app-session.service';
import { Store } from '@ngrx/store';
import { XmlHttpRequestHelper } from './XmlHttpRequestHelper';
import { ServiceProxy, API_BASE_URL, LanguageInfo } from './service-proxies';

@Injectable()
export class UserAuthService implements OnInit {
  // model: SendPasswordResetCodeInput = new SendPasswordResetCodeInput();
  loggedOut: boolean = false;
  permissions$ = new Subject<any>();
  // Observable<{[key: string]: boolean;}>;
  localization: Observable<any>;
  baseUrl: string;
  userAuthenticated: boolean = false;
  language: Observable<LanguageInfo[]>;
  sources: Observable<any>;
  lang: LanguageInfo[];
  userName: string = '';
  logoutSubject$ = new Subject();
  constructor(
    private router: Router,
    private store: Store,
    private abpserviceProxy: ServiceProxy,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string
  ) {
    const temp = JSON.parse(localStorage.getItem('userAuthenticated'));
    if (temp) {
      this.userAuthenticated = temp.value;
    }

    const userName = JSON.parse(localStorage.getItem('userName'));
    this.userName = userName;

    this.getApplicationConfiguration();
  }

  ngOnInit(): void {
    // if (this.sessionService.user) {
    //   this.userAuthenticated = true;
    // }
  }

  isUserAuthenticated() {
    return _observableOf(this.userAuthenticated);
  }

  getApplicationConfiguration(language="en",navigate=true) {
    this.abpserviceProxy.applicationConfiguration(language).subscribe((result) => {
      localStorage.setItem(
        'storedPermissions',
        JSON.stringify(result.auth.grantedPolicies)
      );
      console.log('result.auth.grantedPolicies', result.auth.grantedPolicies);
      this.localization = of(result.localization.languages);
      this.language = of(result.localization.languages);

      localStorage.setItem(
        'userName',
        JSON.stringify(result.currentUser.userName)
      );
      localStorage.setItem(
        'userAuthenticated',
        JSON.stringify({ value: result.currentUser.isAuthenticated })
      );
      this.userAuthenticated = result.currentUser.isAuthenticated;
      if (result.currentUser.isAuthenticated) {
        if (navigate && this.router.url == '/login') {
          this.router.navigateByUrl('pages/dashboard');
        }
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  unauthenticateUser(): void {
    this.userAuthenticated = false;
    localStorage.removeItem('LoginCredential');
    localStorage.removeItem('tenantInfo');
    debugger
    this.logoutSubject$.next(true);
  }

  getLocalization() {
    return _observableOf(this.localization);
  }
  getLanguages() {
    return _observableOf(this.language);
  }

  getSources() {
    return _observableOf(this.sources);
  }
}
