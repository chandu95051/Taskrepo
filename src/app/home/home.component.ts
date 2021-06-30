import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results:Array<any>=[];
  constructor(private as: ApiserviceService) { }

  ngOnInit() {
    this.as.getkey().subscribe((value: any)=>{
      
      (this.results=value.data);
      // console.log(this.results);
    });
  }

}
