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
viewMode='list';
  // disabled : string="false";
  nghh : boolean =false;
  box2:boolean = false;
isActive = true;
  size = "15px";
  multiClasses={
    box1:true,
    box2:true,
    box3:true
  };
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
