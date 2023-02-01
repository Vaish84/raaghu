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
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ServiceProxy, API_BASE_URL, LanguageInfo } from './service-proxies';
import { SharedService } from './shared.service';

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
  currentLanguage:string='en';
  logoutSubject$ = new Subject();
  languageObservable$ = new Subject();

  constructor(
    private router: Router,
    private store: Store,
    private abpserviceProxy: ServiceProxy,
    private sharedService: SharedService,
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

  getApplicationConfiguration(language?:string,navigate=true) {
    if(!language){
      let languageTemp = JSON.parse(localStorage.getItem('savedDefaultLanguage'))
      language = languageTemp? languageTemp.value: 'en';
    }
    else{
      localStorage.setItem('savedDefaultLanguage',JSON.stringify({value:language}))
    }
    this.currentLanguage = language;
    this.languageObservable$.next(language);

    this.abpserviceProxy.applicationConfiguration(language).subscribe(
      (result) => {

        localStorage.setItem('storedPermissions',JSON.stringify(result.auth.grantedPolicies));
        this.sharedService.setLanguageStatus(result.localization.currentCulture)
        this.localization = of(result.localization.languages);
        localStorage.setItem('userName',JSON.stringify(result.currentUser.userName));
        localStorage.setItem('userAuthenticated',  JSON.stringify({ value: result.currentUser.isAuthenticated })
        );
        this.userAuthenticated = result.currentUser.isAuthenticated;
        if (result.currentUser.isAuthenticated) {
          if (navigate && this.router.url == '/login') {
            this.router.navigateByUrl('pages/dashboard');
            this.sharedService.setTopNavTitle('Dashboard');
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
