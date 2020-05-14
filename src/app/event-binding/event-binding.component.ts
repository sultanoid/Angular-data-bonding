import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  simplleVariable = "Aslam vai is our hero"; 

  constructor() { }

  ngOnInit(): void {
  }

  callFunction(event){
    this.simplleVariable = "Aslam vai is now our villan";
  }

}
