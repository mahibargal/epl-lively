import { Directive,ElementRef,HostListener } from '@angular/core';
​
@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {
​
  constructor(private el:ElementRef) { 
    // console.log(this.el.nativeElement);
  }
@HostListener('click')
prevFunction(){
  var elm = this.el.nativeElement.parentElement.parentElement.children[0];
  var item = elm.getElementsByClassName("item");
  elm.prepend(item[item.length -1]);
  console.log(this.el.nativeElement);
}  
}