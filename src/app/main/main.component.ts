import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listOfEmails: object[] =[
    {
    sender: "Glamazon",
    subject: "Purchase Made",
    order: "abc-123-987",
    details: "pair of shoes"
    }
    // ^will populate with emails from api, this is just for an example
  ];
showBoard: boolean = true;
showEmail: boolean = true;
  constructor() { }

  onRemoveHandler(index): void {
    this.listOfEmails.splice(index, 1);
  }
// ^change to 'move to receipt list'?
    
  

  ngOnInit() {
  }

}
