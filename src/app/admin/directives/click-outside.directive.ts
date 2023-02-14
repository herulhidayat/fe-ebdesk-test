import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

    constructor(private _elementRef: ElementRef) { }
  
    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement:any) {
      const clickedInside = this._elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.clickOutside.emit(null);
      }
    }

}
