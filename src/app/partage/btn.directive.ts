import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBtn]',
})
export class BtnDirective {
  private text: string = 'lire la suite';
  constructor(balise: ElementRef) {
    if (balise.nativeElement instanceof HTMLButtonElement) {
      balise.nativeElement.innerHTML = this.text;
      balise.nativeElement.style.border = '2px solid green';
      balise.nativeElement.style.borderRadius = '5px';
      balise.nativeElement.addEventListener('click', (e: any) => {
        if (e.target.innerHTML == this.text) {
          e.target.innerHTML = 'aller sur la page';
        } else {
          e.target.innerHTML = this.text;
        }
      });
    }
  }
}
