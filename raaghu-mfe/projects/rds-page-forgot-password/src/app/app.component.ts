import { Component, Injector, OnInit } from '@angular/core';
import { ComponentLoaderOptions, MfeBaseComponent, ServiceProxy,SendPasswordResetCodeDto } from '@libs/shared';
import {  } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { setDefaultLanguage } from 'projects/libs/state-management/src/lib/state/language/language.actions';

declare var bootstrap: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends MfeBaseComponent implements OnInit {
  model: SendPasswordResetCodeDto = new SendPasswordResetCodeDto();

  title: string = '';
  message: string = '';

  rdsForgotPasswordMfeConfig: ComponentLoaderOptions = {
    name: 'RdsForgotPassword',
  };
  loadingshimmer:boolean=true;
  constructor(private injector: Injector,
    public store:Store,
    private _accountService: ServiceProxy,
    private translate: TranslateService) {
    super(injector)
  }

  ngOnInit(): void {
    this.rdsForgotPasswordMfeConfig = {
      name: 'RdsForgotPassword',
     
      output: {
       
        onShimmerLoad:(event:any)=>{
          this.loadingshimmer=false;
        }
      }
    }
    this.store.select(setDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.on('forgetpassword').subscribe(r => {
      this.model.email= r.emailAddress;
      // var email =r.emailAddress

      this._accountService.sendPasswordResetCode(this.model)
        .subscribe((res) => {
          if (!void (res)) {
            this.message = this.translate.instant('Email Sent Successfully..');
            this.title = this.translate.instant('Success')+'  !';
          } else {
            this.message = this.translate.instant('Failed')+' ..';
            this.title = this.translate.instant('Error')+'  !';
          }

          const element = document.getElementById('notification');
          var bsToast = new bootstrap.Toast(element);

          bsToast.show()

          //this._router.navigate(['pages/login']);
        });

    })


  }
}
