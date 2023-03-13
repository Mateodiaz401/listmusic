import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appImagenRota]'
})
export class ImagenRotaDirective {
  @Input() urlCustom: string
  constructor(private elementRef: ElementRef) { }

  @HostListener('error')
  cargarImagenPorDefecto() {
    const element = this.elementRef.nativeElement
    element.src = this.urlCustom || 'https://josefacchin.com/wp-content/uploads/2018/09/http-not-found-error-404.png'
  }


}
