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
import { ProjectTypeListComponent } from './pages/project-type-list/project-type-list.component';
import { ProjectTypeCreationComponent } from './pages/project-type-creation/project-type-creation.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserTypeListComponent } from './pages/user-type-list/user-type-list.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';


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
  {path : 'client-list', component : ClientViewComponent},
  {path : 'client-details/:id', component : ClientDetailsComponent},
  {path : 'new-client', component : CreateClientComponent},
  {path : 'client-projects/:id', component : ClientProjectsComponent},
  {path: 'project-creation/:userId', component: ProjectCreationComponent},
  {path : 'settings', component : SettingsComponent},
  {path : 'user-types', component : UserTypeListComponent},
  {path : 'project-types', component : ProjectTypeListComponent},
  {path : 'create-project-type', component : ProjectTypeCreationComponent},
  {path : 'project-types/:id', component : ProjectTypeCreationComponent},
  {path : 'project-details/:userId/:id', component : ProjectDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
