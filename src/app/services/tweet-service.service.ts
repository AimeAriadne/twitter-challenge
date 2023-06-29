import {Injectable} from '@angular/core'
import ITweet from '../itweet'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private localList = localStorage.getItem('tweets')

  private tweetsSubject = new BehaviorSubject<ITweet[]>(this.localList ? JSON.parse(this.localList) : [])

  public tweets = this.tweetsSubject.asObservable()

  addTweet(tweet: ITweet) {
    const tweetsList = this.tweetsSubject.getValue()
    tweetsList.push(tweet)
    localStorage.setItem('tweets', JSON.stringify(tweetsList))
  }

  deleteTweet(index: number) {
    const tweetsList = this.tweetsSubject.getValue()
    tweetsList.splice(index, 1)
    localStorage.setItem('tweets', JSON.stringify(tweetsList))
  }
}
