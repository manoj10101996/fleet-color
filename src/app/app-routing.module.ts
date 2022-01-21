import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorFleetComponent } from './color-fleet/color-fleet.component';

const routes: Routes = [
  {
    path: '',
    component: ColorFleetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
