import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSubtitleFont]'
})
export class SubtitleFontDirective {

  @Input() title: string | undefined;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { 
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '20px')
  }

}
