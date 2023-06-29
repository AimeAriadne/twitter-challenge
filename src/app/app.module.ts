import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TweetInputComponent } from './components/tweet-input/tweet-input.component';
import { FormsModule } from '@angular/forms';
import { TweetContentComponent } from './components/tweet-content/tweet-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TweetInputComponent,
    TweetContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
