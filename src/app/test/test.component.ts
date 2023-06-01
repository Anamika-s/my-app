import { Component, OnInit } from '@angular/core';
import { Course } from 'src/course';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  
// course=[];
  // course=[
  //   "ADCA",
  //   "DCST"
  // ];
  
  /**
   *
   */

  courses: Course[]=[];
   
  ngOnInit()
  {
    this.LoadCourses();
  }
  

  LoadCourses() :void
  {
  this.courses= [
    {id:1, name:"CCA"},
    {id:2, name:"DCA"},
    {id:3, name:"BBA"},
    {id:4, name:"MCA"},
    {id:5, name:"PGDCA"},
    {id:6, name:"PGDA"}
  ]
  }
  AddCourse()
  {
    this.courses.push({id:10, name:"DDDD"})
  }
  position: any;
  Delete(courseid: number)
  {
   console.log("Delete")
   console.log(courseid)
   this.position =  this.courses.indexOf(this.courses[courseid]);
   console.log(this.position)
   this.courses.splice(this.position,1)
  }
  viewMode="list";
}
