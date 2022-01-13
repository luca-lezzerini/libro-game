import { CavernaComponent } from './caverna/caverna.component';
import { DentroCastelloComponent } from './dentro-castello/dentro-castello.component';
import { BoscoComponent } from './bosco/bosco.component';
import { FuoriDalCastelloComponent } from './fuori-dal-castello/fuori-dal-castello.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiumeComponent } from './fiume/fiume.component';
import { ArmeriaComponent } from './armeria/armeria.component';
import { TorreComponent } from './torre/torre.component';
import { SegreteComponent } from './segrete/segrete.component';
import { DragoComponent } from './drago/drago.component';
import { TesoroComponent } from './tesoro/tesoro.component';
import { PterodattiloComponent } from './pterodattilo/pterodattilo.component';

const routes: Routes = [
  { path:'fuori-dal-castello', component: FuoriDalCastelloComponent},
  { path:'vai-al-bosco', component: BoscoComponent},
  { path:'entra-nel-castello', component: DentroCastelloComponent},
  { path:'entra-nella-caverna', component: CavernaComponent},
  { path:'vai-al-fiume', component: FiumeComponent},
  { path:'entra-in-armeria', component: ArmeriaComponent},
  { path:'sali-la-torre', component: TorreComponent},
  { path:'vai-alle-segrete', component: SegreteComponent},
  { path:'combatti-il-drago', component: DragoComponent},
  { path:'prendi-il-tesoro', component: TesoroComponent},
  { path:'affronta-lo-pterodattilo', component:PterodattiloComponent},
  { path: '',   redirectTo: '/fuori-dal-castello', pathMatch: 'full' },
  { path: '',   redirectTo: '/vai-al-bosco', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
