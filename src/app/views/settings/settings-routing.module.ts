import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PrivcyComponent } from './privcy/privcy.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'privcy', component: PrivcyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
