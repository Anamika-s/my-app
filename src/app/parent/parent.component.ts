import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
name : string ="Ajay";
calledfromchild(value :  string)
{
  console.log(value);
  console.log("Called from child");
}
}
