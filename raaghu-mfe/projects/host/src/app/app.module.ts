import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  SharedModule,
  UserAuthModule,
  NgxTranslateModule,
  API_BASE_URL,
  UserAuthService,
} from '@libs/shared';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DatePipe } from '@angular/common';

import { LanguageTextEffects } from 'projects/libs/state-management/src/lib/state/language-text/language-text.effects';
import { RdsOffcanvasModule, RdsSideNavModule } from '@libs/rds-elements';
import { LanguageTextReducer } from 'projects/libs/state-management/src/lib/state/language-text/language-text.reducer';
import demodata from '../assets/appconfig.json';
import { RdsCookieConsentConfig } from 'projects/libs/rds-cookieconsent/src/lib/service/cookieconsent-config';
import { RdsCookieConsentModule } from 'projects/libs/rds-cookieconsent/src/lib/rds-cookieconsent.module';
import { OAuthModule, OAuthService, OAuthStorage } from 'angular-oauth2-oidc';
import { OrganizationUnitReducer } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.reducer';
import { OrganizationUnitEffects } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.effects';
import { RoleReducer } from 'projects/libs/state-management/src/lib/state/role/role.reducer';
import { RoleEffects } from 'projects/libs/state-management/src/lib/state/role/role.effects';
import { ProductEffects } from 'projects/libs/state-management/src/lib/state/products/product.effects';
import { productReducer } from 'projects/libs/state-management/src/lib/state/products/product.reducer';
import { IdentityResourcesEffects } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.effects';
import { IdentityResourcesReducer } from 'projects/libs/state-management/src/lib/state/identity-resources/identity-resources.reducer';
import { ClientsReducer } from 'projects/libs/state-management/src/lib/state/clients/clients.reducer';
import { ClaimTypesReducer } from 'projects/libs/state-management/src/lib/state/claim-types/claim-types.reducer';
import { ClientsEffects } from 'projects/libs/state-management/src/lib/state/clients/clients.effects';
import { ClaimTypesEffects } from 'projects/libs/state-management/src/lib/state/claim-types/claim-types.effects';
import { ApiResourcesReducer } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.reducer';
import { ApiResourcesEffects } from 'projects/libs/state-management/src/lib/state/api-resources/api-resources.effects';
import { TextTemplateReducer } from 'projects/libs/state-management/src/lib/state/text-template/text-template.reducer';
import { TextTemplateEffects } from 'projects/libs/state-management/src/lib/state/text-template/text-template.effects';
import { ScopesReducer } from 'projects/libs/state-management/src/lib/state/api-scope/api-scope.reducer';
import { ApiScopeEffects } from 'projects/libs/state-management/src/lib/state/api-scope/api-scope-effects';
import { ProfileReducer } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.reducers';
import { ProfileEffects } from 'projects/libs/state-management/src/lib/state/profile-settings/profile-settings.effects';
import { SecurityLogsReducer } from 'projects/libs/state-management/src/lib/state/security-logs/security-logs.reducer';
import { SecurityLogEffects } from 'projects/libs/state-management/src/lib/state/security-logs/security-logs.effects';
import { AuditLogsEffects, AuditLogsReducer, DownloadEffects, downloadReducer, LoginEffects, ValidateTenantReducer } from '@libs/state-management';
// import { LanguageEffects } from 'projects/libs/state-management/src/lib/state/language/language.effects';
import { ManageLinkedAccountsEffects } from 'projects/libs/state-management/src/lib/state/manage-linked-accounts/manage-linked-accounts.effects';
import { UserEffects } from 'projects/libs/state-management/src/lib/state/user/user.effects';
import { UserReducer } from 'projects/libs/state-management/src/lib/state/user/user.reducer';
import { LanguageEffects } from 'projects/libs/state-management/src/lib/state/language/language.effects';
import { LanguageReducer } from 'projects/libs/state-management/src/lib/state/language/language.reducer';
import { TenantReducer } from 'projects/libs/state-management/src/lib/state/tenant/tenant.reducer';
import { TenantEffects } from 'projects/libs/state-management/src/lib/state/tenant/tenant.effects';
import { SettingEffects } from 'projects/libs/state-management/src/lib/state/settings/settings.effects';
import { settingReducer } from 'projects/libs/state-management/src/lib/state/settings/settings.reducer';
import { EditionReducer } from 'projects/libs/state-management/src/lib/state/edition/edition.reducer';
import { EditionEffects } from 'projects/libs/state-management/src/lib/state/edition/edition.effects';
import { RdsCompDataTableModule } from 'projects/rds-components/src/app/rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompMysettingsModule } from 'projects/rds-components/src/app/rds-comp-mysettings/rds-comp-mysettings.module';
import { RdsCompLinkedAccountsModule } from 'projects/rds-components/src/app/rds-comp-linked-accounts/rds-comp-linked-accounts.module';
import { RdsCompPersonalDataModule } from 'projects/rds-components/src/app/rds-comp-personal-data/rds-comp-personal-data.module';
import { RdsCompTopNavigationModule } from 'projects/rds-components/src/app/rds-comp-top-navigation/rds-comp-top-navigation.module';
export function getRemoteServiceBaseUrl(): any {
  let URL = demodata.remoteServiceBaseUrl;
  return URL;
}
const cookieConfig: RdsCookieConsentConfig = {
  cookie: {
    domain: location.hostname,
    name: 'rds_cookie_status',
  },
  position: 'bottom',
  theme: 'classic',
  palette: {
    popup: {
      background: '#e8ebf9ed',
      text: '#000000',
    },
    button: {
      background: '#012fffb5',
      text: '#000000',
      border: 'transparent',
    },
  },
  type: 'opt-in',
  elements: {
    messagelink: `
      <img class="pe-3" src="{{image}}" width=\"80px\" ></img>
      <span id="cookieconsent:desc" class="cc-message">{{message}} </span>
      `,
  },
  content: {
    policy: 'Rds Cookies',
    image: '../assets/cookie.svg',
  },
};
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RdsCookieConsentModule.forRoot(cookieConfig),
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    RdsCompTopNavigationModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forRoot({
      products: productReducer,
      languages:LanguageReducer,
      settings : settingReducer,
      auditLogs: AuditLogsReducer,
      tenants:TenantReducer,
      // dynamicProperty: DynamicPropertyReducer,
      // dynamicEntity: DynamicEntityReducer,
        profile: ProfileReducer,
        editions: EditionReducer,
      organizationUnit: OrganizationUnitReducer,
      roles: RoleReducer,
      texTemplate: TextTemplateReducer,
      validateTenant: ValidateTenantReducer,
      identityResources: IdentityResourcesReducer,
      apiResources: ApiResourcesReducer,
      apiScope: ScopesReducer,
      securityLogs: SecurityLogsReducer,
      clients: ClientsReducer,
      languageText: LanguageTextReducer,
      user: UserReducer,
      downloadData: downloadReducer,
      claimTypes: ClaimTypesReducer,
    }),

    StoreDevtoolsModule.instrument({
      name: 'Raaghu MFE',
      logOnly: false,
    }),
    EffectsModule.forRoot([
      ProductEffects,
      ProfileEffects,
      ApiScopeEffects,
      EditionEffects,
      SecurityLogEffects,
      TextTemplateEffects,
      IdentityResourcesEffects,
      ApiResourcesEffects,
      ClientsEffects,
      ClaimTypesEffects,
      OrganizationUnitEffects,
      LanguageTextEffects,
      RoleEffects,
      TenantEffects,
      DownloadEffects,
      LoginEffects,
      ManageLinkedAccountsEffects,
      OrganizationUnitEffects,
      LoginEffects,
      LanguageTextEffects,
      TextTemplateEffects,
      DownloadEffects,
      UserEffects,
      LanguageEffects,
      SettingEffects,
      AuditLogsEffects
    ]),
    SharedModule,
    UserAuthModule,
    BrowserAnimationsModule,
    RdsSideNavModule,
    RdsOffcanvasModule,
    RdsCompDataTableModule,
    RdsCompMysettingsModule,
    RdsCompLinkedAccountsModule,
    RdsCompPersonalDataModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SidenavComponent,
  ],

  providers: [
    DatePipe,
    OAuthService,
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    UserAuthService,
    OAuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
