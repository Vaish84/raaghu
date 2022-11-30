import { NgModule } from '@angular/core';
import { RdsAlertModule, RdsBadgeModule, RdsButtonModule, RdsIconModule, RdsModalModule, RdsNavTabModule } from '@libs/rds-elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';

import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { CommonModule } from '@angular/common';
import { RdsCompAlertComponent } from 'projects/rds-components/src/app/rds-comp-alert/rds-comp-alert.component';
@NgModule({
  declarations: [
    AppComponent,    
    RdsCompAlertComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RdsNavTabModule,RdsModalModule,RdsButtonModule,
    RdsBadgeModule,SharedModule,
    RdsIconModule,
    RdsFabMenuModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
