import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PeepCreateComponent } from './peeps/peep-create/peep-create.component';
import { PeepListComponent } from './peeps/peep-list/peep-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PeepCreateComponent,
    PeepListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
