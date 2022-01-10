import { CavernaComponent } from './caverna/caverna.component';
import { DentroCastelloComponent } from './dentro-castello/dentro-castello.component';
import { BoscoComponent } from './bosco/bosco.component';
import { FuoriDalCastelloComponent } from './fuori-dal-castello/fuori-dal-castello.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'fuori-dal-castello', component: FuoriDalCastelloComponent},
  { path:'vai-al-bosco', component: BoscoComponent},
  { path:'entra-nel-castello', component: DentroCastelloComponent},
  { path:'caverna', component: CavernaComponent},
  { path: '',   redirectTo: '/fuori-dal-castello', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
