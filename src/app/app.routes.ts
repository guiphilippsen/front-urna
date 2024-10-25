import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { EleitoresComponent } from './component/eleitores/eleitores.component';
import { CandidatosComponent } from './component/candidatos/candidatos.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'eleitores', component: EleitoresComponent },
  { path: 'candidatos', component: CandidatosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
