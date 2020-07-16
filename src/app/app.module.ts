import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ProgressBarModule } from 'angular-progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrokerageComponent } from './pages/brokerage/brokerage.component';
import { SimulatorComponent } from './pages/brokerage/components/simulator/simulator.component';
import { BusinessContributorComponent } from './pages/business-contributor/business-contributor.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { ConsultancyComponent } from './pages/consultancy/consultancy.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { CustomerHomepageComponent } from './pages/customer-homepage/customer-homepage.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LegalComponent } from './pages/legal/legal.component';
import { LoginComponent } from './pages/login/login.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectCardComponent } from './pages/projectCard/project-card/project-card.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { TypeprojectcardComponent } from './pages/typeProjectCard/typeprojectcard/typeprojectcard.component';
import { TypeUserCardComponent } from './pages/typeUserCard/type-user-card/type-user-card.component';
import { UserCardComponent } from './pages/user-card/user-card.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { AppointmentButtonComponent } from './shared/buttons/appointment-button/appointment-button.component';
import { EditableContentComponent } from './shared/components/editable-content/editable-content.component';
import { VideoComponent } from './shared/components/video/video.component';
import { ArrowDownComponentComponent } from './shared/style/arrow-down-component/arrow-down-component.component';
import { AuthInterceptor } from './shared/core/interceptor/auth.interceptor';
registerLocaleData(localeFr, 'fr');








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
    EditableContentComponent,
    LegalComponent,
    CorporateComponent,
    ClaimComponent,
    PartnershipComponent,
    RecruitmentComponent,
    UserFormComponent,
    ProjectListComponent,
    UserCardComponent,
    ProjectCardComponent,
    TypeUserCardComponent,
    TypeprojectcardComponent,
    ArrowDownComponentComponent,
    AppointmentButtonComponent,
    CustomerHomepageComponent,
    ProjectDetailsComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatGridListModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ProgressBarModule,

    ReactiveFormsModule,






  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [VideoComponent, MatTableModule, MatGridListModule, MatSelectModule, BrowserAnimationsModule,
  ],
  entryComponents: [UserFormComponent]
})
export class AppModule { }


