import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { CounterComponent } from './counter/counter.component';
// import { ListModule } from './heroes/heroes.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroModule } from './heroes/heroes.module';
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
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
