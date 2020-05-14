import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-comp',
  templateUrl: './interpolation-comp.component.html',
  styleUrls: ['./interpolation-comp.component.css']
})
export class InterpolationCompComponent implements OnInit {
  
  title  = "Data Interpolation"; 
  simpleVariable : string = "Simple interpolation"; 
  months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
  isavailable = true; 

  constructor() { }

  ngOnInit(): void {
  }

}
