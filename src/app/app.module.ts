import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BrokerageComponent } from './pages/brokerage/brokerage.component';
import { BusinessContributorComponent } from './pages/business-contributor/business-contributor.component';
import { ConsultancyComponent } from './pages/consultancy/consultancy.component';
import { LoginComponent } from './pages/login/login.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SimulatorComponent } from './pages/brokerage/components/simulator/simulator.component';
import { VideoComponent } from './shared/components/video/video.component';
import { EditableContentComponent } from './shared/components/editable-content/editable-content.component';
import { LegalComponent } from './pages/legal/legal.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserCardComponent } from './pages/user-card/user-card.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { from } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatGridList,  } from '@angular/material/grid-list';




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
    ReactiveFormsModule,



    ReactiveFormsModule



  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent],
  exports: [VideoComponent, MatTableModule,MatGridListModule,MatSelectModule,BrowserAnimationsModule],

  entryComponents: [UserFormComponent]
})
export class AppModule { }


