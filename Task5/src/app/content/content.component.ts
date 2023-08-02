import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  contentData: string = 'Data From Content';
  @Output() myEvent = new EventEmitter();

  constructor() {
    console.log('1-ctor');
  }
  ngOnInit(): void {
    this.myEvent.emit(this.contentData);
  }
  
}