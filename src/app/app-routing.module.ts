import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BrokerageComponent } from './pages/brokerage/brokerage.component';
import { BusinessContributorComponent } from './pages/business-contributor/business-contributor.component';
import { ConsultancyComponent } from './pages/consultancy/consultancy.component';
import { LegalComponent } from './pages/legal/legal.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { CorporateComponent } from './pages/corporate/corporate.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { CustomerHomepageComponent } from './pages/customer-homepage/customer-homepage.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'brokerage', component: BrokerageComponent},
  {path: 'business-contributor', component: BusinessContributorComponent},
  {path: 'consultancy', component: ConsultancyComponent},
  {path : 'legal', component : LegalComponent},
  {path : 'claim', component : ClaimComponent},
  {path : 'recruitment', component : RecruitmentComponent},
  {path : 'partnership', component : PartnershipComponent},
  {path : 'corporate', component : CorporateComponent},
  {path : 'user', component : UserFormComponent},
  {path : 'projects/:id', component : ProjectListComponent},
  {path : 'customer-homepage', component: CustomerHomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
