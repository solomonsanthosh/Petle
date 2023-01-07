import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { CareComponent } from './care/care.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'board', component: BoardComponent },
  { path: 'care', component: CareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
