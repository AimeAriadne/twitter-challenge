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
}
