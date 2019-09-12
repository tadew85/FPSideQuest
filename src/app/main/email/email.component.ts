import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  @Input() mail: object;
  @Input() mailIndex: number;
  @Output() onRemove = new EventEmitter<any>();

  constructor() { }

  removeEmail(index: number): void {
    this.onRemove.emit(index);
  }
  ngOnInit() {
  }

}
