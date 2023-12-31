import { Component, OnInit, } from '@angular/core'
import { faStar, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import ITweet from 'src/app/itweet'
import IUser from 'src/app/iuser'
import { TweetService } from 'src/app/services/tweet-service.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  faStar: IconDefinition = faStar
  tweetsList: ITweet[] = []
  
  user: IUser = {
    name: '',
    account: '',
    image: ''
  }

  constructor(private TweetService: TweetService) {}

  ngOnInit() {
    this.TweetService.tweets.subscribe(tweets => {
      this.tweetsList = tweets
    })
    this.user = {
      name: this.tweetsList[0]?.user || 'Jane',
      account: this.tweetsList[0]?.account || '@jeez',
      image: this.tweetsList[0]?.image || 'https://picsum.photos/200',
    }
  }

  deleteTweet(i: number) {
    let tweetIndex = this.tweetsList.findIndex((el, index) => {
      return i === index
    })
    this.TweetService.deleteTweet(tweetIndex)
  }  
}
