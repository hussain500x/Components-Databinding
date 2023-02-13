import {  Directive, ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elmentRef:ElementRef){
      this.elmentRef.nativeElement.style.backgroundColor = 'yellow';
    }

    
  ngOnInit(): void {
    throw new Error("Method not implemented.");

  }
  
}