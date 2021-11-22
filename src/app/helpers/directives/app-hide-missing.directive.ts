import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: "img[appHideMissing]",
})
export class AppHideMissingDirective {
  constructor(private el: ElementRef) {}

  @HostListener("error")
  private onError() {
    this.el.nativeElement.src = 'https://i0.wp.com/eceaybikeala.com/wp-content/uploads/2020/08/placeholder.png?ssl=1';
  }

}
