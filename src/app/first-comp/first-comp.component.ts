import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {

  img1: string="/assets/images/img1.jpg";
  img2: string="/assets/images/img2.jpg";
  
  name:string="Deepak";
  number1: number = 10;
  number2: number = 20;

  // disabled : string="false";
  nghh : boolean =false;

  appStatus:boolean= true;

  hello()
  {
    console.log("hello");
  }
comment : string="This is new comment";





  AddNumbers() : number
  {
      return this.number1+ this.number2;
  }
}
