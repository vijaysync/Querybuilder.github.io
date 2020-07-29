import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements OnInit {

  public constructor(private el: ElementRef) {

  }

  public ngOnInit(): void {
    this.el.nativeElement.focus();
  }

}
