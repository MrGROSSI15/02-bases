import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heroes.module';
// import { ListModule } from './heroes/heroes.module';
import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule,
    // ListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
