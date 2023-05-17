import { Component,OnInit,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit,OnDestroy  {
  title = 'diego';
  public firstName:string='Diego';
  public email:string='diego@gmail.com';

  constructor() {
    console.log("1) Hello I am in the constructor");
  }

  ngOnInit() {
   console.log("2) Hello I am initializing the component");
  }

  ngAfterViewInit(): void {
    console.log("3) Hello I am in afterviewinit");
  }

  ngOnDestroy() {
    console.log("4) Hello the component is being destroyed");
  }

  saySomething() {
    alert("Button Pressed")
  }



}
