import {Component, OnInit, Input, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() { }

  ngOnInit() {
    // console.log(this.header.nativeElement.textContent);
    console.log('Text content paragraph:' + this.paragraph.nativeElement.textContent);
  }

}
