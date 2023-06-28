import { faGlobeAmericas, faLock, faImage, faSquare, faChartBar, faSmile, faCalendarTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tweet-input',
  templateUrl: './tweet-input.component.html',
  styleUrls: ['./tweet-input.component.css']
})
export class TweetInputComponent {
  faPreferences = faGlobeAmericas;
  user = {
    name: 'Jane',
    image: 'https://picsum.photos/200'
  };
  globalPreferences: boolean = true;
  userPreferences: string = 'Qualquer pessoa pode responder'; 
  maxInputLength: number = 130;
  tweet: string = '';
  icons:  IconDefinition[] = [
    faImage,
    faSquare,
    faChartBar,
    faSmile,
    faCalendarTimes
  ]

  changePreferences() {
    this.globalPreferences = !this.globalPreferences
    this.userPreferences = this.globalPreferences ? 'Qualquer pessoa pode responder' : 'Apenas seguidores podem responder' 
    this.faPreferences = this.globalPreferences ? faGlobeAmericas : faLock
  };

  sendTweet() {
    const newTweet = this.tweet
    localStorage.setItem('tweets', newTweet)
    this.tweet = ''
  }

}
