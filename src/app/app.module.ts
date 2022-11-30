import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PokeCardComponent } from './poke-card/poke-card.component';

@NgModule({
  declarations: [AppComponent, PokeCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
