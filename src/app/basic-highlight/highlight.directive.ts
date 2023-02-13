import { Directive, ElementRef,OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elmentRef:ElementRef){
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
    this.elmentRef.nativeElement.style.backgroundColor='green';
  }
  
}