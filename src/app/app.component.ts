import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{
  numbers = [1, 2, 3, 4, 5];
  oddNumber=[1,3,5]
  evenNumber=[2,4]
  onlyOdd = false;


  constructor(){
    alert('I am in constr');
  }
 
      
  ngOnInit(): void {
    alert('I am in ngOnint');
  
  }

  ngAfterViewInit(): void {
    debugger;
    // alert('My screen is loaded now');
  
  } 

  ngOnDestroy(): void {
    debugger;
  }





}
