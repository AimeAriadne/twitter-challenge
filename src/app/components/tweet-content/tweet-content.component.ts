import { IconDefinition, faEllipsis, faComment, faClone, faHeart, faUpload, faBarChart  } from '@fortawesome/free-solid-svg-icons'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import ITweet from 'src/app/itweet'
@Component({
  selector: 'app-tweet-content',
  templateUrl: './tweet-content.component.html',
  styleUrls: ['./tweet-content.component.css']
})
export class TweetContentComponent implements OnInit {
  @Input() tweet: ITweet = {
    user: '',
    account: '',
    image: '',
    time: 0,
    tweet: ''
  }
  
  @Output() deleteTweetEvent = new EventEmitter<ITweet>()

  faEllipsis: IconDefinition = faEllipsis

  icons:  IconDefinition[] = [
   faComment,
   faClone,
   faHeart,
   faUpload,
   faBarChart
  ]
  
  isMenuOpen: boolean = false
  isDialogShown: boolean = false

  passedTime: string | undefined
  interval: ReturnType<typeof setInterval> | undefined

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.passedTime = this.checkPassedTime()
    }, 1000)
  }

  showMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
    this.hideDialog()
  }

  showDialog(): void {
    this.isDialogShown = true
    this.isMenuOpen = false
  }

  hideDialog(): void {
    this.isDialogShown = false
  }

  deleteTweet(): void {
    this.deleteTweetEvent.emit()
  }

  checkPassedTime(): string {
    let now = new Date().getTime()
    let passedSeconds =  Math.round((now - this.tweet.time) / 1000)
    if (passedSeconds < 59) {
      return passedSeconds + 's'
    } else {
      clearInterval(this.interval)
      let timeStamp =  new Date(this.tweet.time).toLocaleString()
      return timeStamp
    }
  }
}
