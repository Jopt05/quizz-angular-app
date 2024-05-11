import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzModule } from './quizz/quizz.module';
import { ContainerComponent } from './quizz/components/container/container.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuizzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
