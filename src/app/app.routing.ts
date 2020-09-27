import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessDeniedComponent } from "./components/access-denied/access-denied.component"
import { ErrorComponent } from "./components/error/error.component"
import { NotFoundComponent } from "./components/not-found/not-found.component"

const routes: Routes = [
  { path: "access-denied", component: AccessDeniedComponent},
  { path: "error", component: ErrorComponent},
  { path: "not-found", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
