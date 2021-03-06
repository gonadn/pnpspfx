import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { PnpspfxWebPartComponent } from './pnpspfx-web-part/pnpspfx-web-part.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    PnpspfxWebPartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  entryComponents: [PnpspfxWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(PnpspfxWebPartComponent, { injector: this.injector });
    customElements.define('app-pnpspfx-web-part', el);
  }
}
