import { TweetService } from 'src/app/services/tweet-service.service'
import { faGlobeAmericas, faLock, faImage, faSquare, faChartBar, faSmile, faCalendarTimes, IconDefinition, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Component, Input } from '@angular/core'
import ITweet from 'src/app/itweet'
import IUser from 'src/app/iuser'


@Component({
  selector: 'app-tweet-input',
  templateUrl: './tweet-input.component.html',
  styleUrls: ['./tweet-input.component.css']
})
export class TweetInputComponent{
  @Input() user: IUser = {
    name: '',
    account: '',
    image: '',
  }
  
  faPreferences = faGlobeAmericas
  faPaperPlane = faPaperPlane  
  
  globalPreferences: boolean = true
  userPreferences: string = 'Qualquer pessoa pode responder' 
  maxInputLength: number = 130
  tweet: string = ''
  icons:  IconDefinition[] = [
    faImage,
    faSquare,
    faChartBar,
    faSmile,
    faCalendarTimes
  ]

  constructor(private TweetService: TweetService) {}

  changePreferences(): void {
    this.globalPreferences = !this.globalPreferences
    
    this.userPreferences = this.globalPreferences ? 'Qualquer pessoa pode responder' : 'Apenas seguidores podem responder' 
    
    this.faPreferences = this.globalPreferences ? faGlobeAmericas : faLock
  }

  sendTweet(): void {
    const newTweet = {
      user: this.user.name,
      account: this.user.account,
      image: this.user.image,
      time: new Date().getTime(),
      tweet: this.tweet
    }
    
    this.TweetService.addTweet(newTweet)
    
    this.tweet = ''
  }
}
