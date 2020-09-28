import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessDeniedComponent } from './components/access-denied/access-denied.component'
import { ErrorComponent } from './components/error/error.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },

  { path: 'pages', 
    loadChildren: () => 
      import('./core/pages/pages.module').then((m) => m.PagesModule),
  },

  { path: 'access-denied', component: AccessDeniedComponent},
  { path: 'error', component: ErrorComponent},
  { path: '**', redirectTo: 'notfound'},
  { path: 'notfound', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
