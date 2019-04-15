import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeamComponent } from './team/team.component';
const routes: Routes = [
{path: "search", component: LandingPageComponent},
{path: "team/:teamName", component: TeamComponent},
{path: "", component: LandingPageComponent},
//{path: "**", component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
