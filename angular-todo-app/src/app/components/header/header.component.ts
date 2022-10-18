import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'tracker app';

  constructor() {}

  ngOnInit(): void { //lifecycle method like http request
  }

  toggleAddTask(){
    console.log("toggle")
  }

}