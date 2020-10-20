import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/Static_pages/Principal/home/home.component';
import { LoginComponent } from './pages/Static_pages/Principal/login/login.component';
import { BrokerageComponent } from './pages/Static_pages/Principal/brokerage/brokerage.component';
import { BusinessContributorComponent } from './pages/Static_pages/Principal/business-contributor/business-contributor.component';
import { ConsultancyComponent } from './pages/Static_pages/Principal/consultancy/consultancy.component';
import { LegalComponent } from './pages/Static_pages/Secondary/legal/legal.component';
import { ClaimComponent } from './pages/Static_pages/Secondary/claim/claim.component';
import { RecruitmentComponent } from './pages/Static_pages/Secondary/recruitment/recruitment.component';
import { PartnershipComponent } from './pages/Static_pages/Secondary/partnership/partnership.component';
import { CorporateComponent } from './pages/Static_pages/Secondary/corporate/corporate.component';
import { ClientViewComponent } from './pages/LoggedIn Pages/client-related/client-view/client-view.component';
import { AuthGuard } from './shared/core/guard/auth/auth.guard';
import { AdminGuard } from './shared/core/guard/admin/admin.guard';
import { ClientDetailsComponent } from './pages/LoggedIn Pages/client-related/client-details/client-details.component';
import { CreateClientComponent } from './pages/LoggedIn Pages/client-related/create-client/create-client.component';
import { ClientProjectsComponent } from './pages/LoggedIn Pages/client-related/client-projects/client-projects.component';
import { ProjectCreationComponent } from './pages/LoggedIn Pages/project-related/project-creation/project-creation.component';
import { SettingsComponent } from './pages/LoggedIn Pages/settings/settings.component';
import { UserTypeListComponent } from './pages/LoggedIn Pages/client-related/user-type-list/user-type-list.component';
import { ProjectTypeListComponent } from './pages/LoggedIn Pages/project-related/project-type-list/project-type-list.component';
import { ProjectTypeCreationComponent } from './pages/LoggedIn Pages/project-related/project-type-creation/project-type-creation.component';
import { ProjectDetailComponent } from './pages/LoggedIn Pages/project-related/project-detail/project-detail.component';
import { FaqComponent } from './pages/Static_pages/Secondary/faq/faq.component';


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
