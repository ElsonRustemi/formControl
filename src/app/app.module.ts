import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PianodicuraformComponent } from './components/pianodicuraform/pianodicuraform.component';
import { FormPazienteComponent } from './components/form-paziente/form-paziente.component';
import { FormChiusuraPianoComponent } from './components/form-chiusura-piano/form-chiusura-piano.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    PianodicuraformComponent,
    FormPazienteComponent,
    FormChiusuraPianoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    ScrollingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
