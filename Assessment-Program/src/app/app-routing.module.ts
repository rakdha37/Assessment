import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberportalComponent } from './main/memberportal/memberportal.component';

const routes: Routes = [
  { path: "", redirectTo: "memberportal", pathMatch: "full" },
  { path: "memberportal", component: MemberportalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
