import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuoriDalCastelloComponent } from './fuori-dal-castello/fuori-dal-castello.component';
import { BoscoComponent } from './bosco/bosco.component';
import { DentroCastelloComponent } from './dentro-castello/dentro-castello.component';
import { CavernaComponent } from './caverna/caverna.component';

@NgModule({
  declarations: [
    AppComponent,
    FuoriDalCastelloComponent,
    BoscoComponent,
    DentroCastelloComponent,
    CavernaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
