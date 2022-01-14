import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appParagraph]',
})
export class ParagraphDirective implements OnInit {
  @Input('appParagraph') appParagraph: string | boolean | undefined = false;

  constructor(private balise: ElementRef) {
    console.log(this.appParagraph);
  }

  ngOnInit(): void {
    if (this.appParagraph) {
      this.balise.nativeElement.innerHTML =
        'Je viens de remplir la balise avec une directive';
      console.log(this.appParagraph);
    } else {
      ('Veuillez remplir la directive avec true');
    }
  }
}
