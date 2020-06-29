import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CreateComponent } from './create/create.component';
import { VerifyComponent } from './verify/verify.component';
import { AcceptComponent } from './accept/accept.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'takeout', component: ContentComponent},
  {path: 'create',component: CreateComponent},
  {path:'verify', component: VerifyComponent},
  {path:'accept', component: AcceptComponent},
  {path:'summary', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
