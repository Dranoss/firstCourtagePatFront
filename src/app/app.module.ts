import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoComponent } from './shared/components/video/video.component';
import { ArrowDownComponentComponent } from './shared/style/arrow-down-component/arrow-down-component.component';
import { AppointmentButtonComponent } from './shared/buttons/appointment-button/appointment-button.component';
import { AuthInterceptor } from './shared/core/interceptor/auth.interceptor';
import { NavBarComponent } from './pages/Static pages/Principal/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/Static pages/Principal/footer/footer.component';
import { HomeComponent } from './pages/Static pages/Principal/home/home.component';
import { BrokerageComponent } from './pages/Static pages/Principal/brokerage/brokerage.component';
import { BusinessContributorComponent } from './pages/Static pages/Principal/business-contributor/business-contributor.component';
import { ConsultancyComponent } from './pages/Static pages/Principal/consultancy/consultancy.component';
import { LoginComponent } from './pages/Static pages/Principal/login/login.component';
import { SimulatorComponent } from './pages/Static pages/Principal/brokerage/components/simulator/simulator.component';
import { LegalComponent } from './pages/Static pages/Secondary/legal/legal.component';
import { CorporateComponent } from './pages/Static pages/Secondary/corporate/corporate.component';
import { ClaimComponent } from './pages/Static pages/Secondary/claim/claim.component';
import { PartnershipComponent } from './pages/Static pages/Secondary/partnership/partnership.component';
import { RecruitmentComponent } from './pages/Static pages/Secondary/recruitment/recruitment.component';
import { ClientViewComponent } from './pages/LoggedIn Pages/client-related/client-view/client-view.component';
import { ClientDetailsComponent } from './pages/LoggedIn Pages/client-related/client-details/client-details.component';
import { ClientProjectsComponent } from './pages/LoggedIn Pages/client-related/client-projects/client-projects.component';
import { CreateClientComponent } from './pages/LoggedIn Pages/client-related/create-client/create-client.component';
import { ProjectCreationComponent } from './pages/LoggedIn Pages/project-related/project-creation/project-creation.component';
import { ProjectTypeCreationComponent } from './pages/LoggedIn Pages/project-related/project-type-creation/project-type-creation.component';
import { ProjectTypeListComponent } from './pages/LoggedIn Pages/project-related/project-type-list/project-type-list.component';
import { SettingsComponent } from './pages/LoggedIn Pages/settings/settings.component';
import { UserTypeListComponent } from './pages/LoggedIn Pages/client-related/user-type-list/user-type-list.component';
import { ProjectDetailComponent } from './pages/LoggedIn Pages/project-related/project-detail/project-detail.component';
import { FaqComponent } from './pages/Static pages/Secondary/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    BrokerageComponent,
    BusinessContributorComponent,
    ConsultancyComponent,
    LoginComponent,
    VideoComponent,
    SimulatorComponent,
    // EditableContentComponent,
    LegalComponent,
    CorporateComponent,
    ClaimComponent,
    PartnershipComponent,
    RecruitmentComponent,
    ArrowDownComponentComponent,
    AppointmentButtonComponent,
    ClientViewComponent,
    ClientDetailsComponent,
    ClientProjectsComponent,
    CreateClientComponent,
    ProjectCreationComponent,
    ProjectTypeCreationComponent,
    ProjectTypeListComponent,
    SettingsComponent,
    UserTypeListComponent,
    ProjectDetailComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [VideoComponent],
})
export class AppModule { }


