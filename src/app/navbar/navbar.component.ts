import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUser:boolean=false;

  constructor() { }

  
  isOpen:boolean=false;
  
  
  Togglebutton(){
    this.isOpen=!this.isOpen;
  }

  ngOnInit(): void {
  }

}
