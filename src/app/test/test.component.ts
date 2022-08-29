import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 public clickCount="";
  constructor() { }

  ngOnInit(): void {
  }

logMessage(){
 this.clickCount="welcome"
    
  }

}
