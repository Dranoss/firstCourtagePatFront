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
import { ClientViewComponent } from './pages/client-view/client-view.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { ClientProjectsComponent } from './pages/client-projects/client-projects.component';
import { CreateClientComponent } from './pages/create-client/create-client.component';
import { ProjectCreationComponent } from './pages/project-creation/project-creation.component';


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
  {path : 'clientView', component : ClientViewComponent},
  {path : 'client-details/:userType/:id', component : ClientDetailsComponent},
  {path : 'client-details/new-client', component : CreateClientComponent},
  {path : 'client-projects/:userType/:id', component : ClientProjectsComponent},
  {path: 'project-creation/:userType/:userId', component: ProjectCreationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
