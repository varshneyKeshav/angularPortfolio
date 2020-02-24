import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthGaurdGuard } from './auth-gaurd.guard';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'login'},
{ path: 'login', component: LoginComponent },
{ path: 'admin',  component: AdminComponent, canActivate:[AuthGaurdGuard], children : [ 
  {path: '', redirectTo: 'adminpage', pathMatch: 'full' },
  { path: 'adminpage', component: AdminPageComponent},
  {  path: 'dashboard', component: DashboardComponent},
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'userDetails', component: UserDetailsComponent }

]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
