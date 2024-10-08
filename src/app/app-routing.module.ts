import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'people', component: PeopleListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

