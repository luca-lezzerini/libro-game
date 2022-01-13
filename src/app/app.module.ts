import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuoriDalCastelloComponent } from './fuori-dal-castello/fuori-dal-castello.component';
import { BoscoComponent } from './bosco/bosco.component';
import { DentroCastelloComponent } from './dentro-castello/dentro-castello.component';
import { CavernaComponent } from './caverna/caverna.component';
import { FiumeComponent } from './fiume/fiume.component';
import { TorreComponent } from './torre/torre.component';
import { ArmeriaComponent } from './armeria/armeria.component';
import { SegreteComponent } from './segrete/segrete.component';
import { DragoComponent } from './drago/drago.component';
import { PterodattiloComponent } from './pterodattilo/pterodattilo.component';
import { TesoroComponent } from './tesoro/tesoro.component';

@NgModule({
  declarations: [
    AppComponent,
    FuoriDalCastelloComponent,
    BoscoComponent,
    DentroCastelloComponent,
    CavernaComponent,
    FiumeComponent,
    TorreComponent,
    ArmeriaComponent,
    SegreteComponent,
    DragoComponent,
    PterodattiloComponent,
    TesoroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
