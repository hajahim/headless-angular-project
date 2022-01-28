import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { RoutingModule } from './routing/routing.module';
import { ComponentsModule } from './components/components.module';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    RoutingModule,
    ComponentsModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
