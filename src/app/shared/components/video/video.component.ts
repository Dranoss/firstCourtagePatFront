import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'apa-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() videoCode;
  constructor() { }

  ngOnInit(): void {
    // this.videoCode = 'oPqHzTLgBr0';
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
