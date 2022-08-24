import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'table',
    loadComponent: () =>
      import('./table/table.component').then((c) => c.TableComponent),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/form.component').then((c) => c.FormComponent),
  },
  {
    path: '**',
    redirectTo: 'table',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
