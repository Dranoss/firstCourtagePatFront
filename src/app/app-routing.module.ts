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
import { AuthGuard } from './shared/core/guard/auth/auth.guard';
import { AdminGuard } from './shared/core/guard/admin/admin.guard';
import { FaqComponent } from './pages/faq/faq.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'brokerage', component: BrokerageComponent},
  {path: 'business-contributor', component: BusinessContributorComponent},
  {path: 'consultancy', component: ConsultancyComponent},
  {path: 'legal', component: LegalComponent},
  {path: 'claim', component: ClaimComponent},
  {path: 'recruitment', component: RecruitmentComponent},
  {path: 'partnership', component: PartnershipComponent},
  {path: 'corporate', component: CorporateComponent},
  {path: 'client-list', component: ClientViewComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'client-details/:userId', component: ClientDetailsComponent, canActivate: [AuthGuard]},
  {path: 'new-client', component: CreateClientComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'client-projects/:userId', component: ClientProjectsComponent, canActivate: [AuthGuard]},
  {path: 'project-creation/:userId', component: ProjectCreationComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'user-types', component: UserTypeListComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'project-types', component: ProjectTypeListComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'create-project-type', component: ProjectTypeCreationComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'project-types/:id', component: ProjectTypeCreationComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'project-details/:userId/:id', component: ProjectDetailComponent, canActivate: [AuthGuard]},
  {path : 'faq', component : FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
