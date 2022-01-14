import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { LasuitePipe } from './lasuite.pipe';
import { TitrePipe } from './titre.pipe';
import { ImageDirective } from './image.directive';
import { ParagraphDirective } from './paragraph.directive';
import { BtnDirective } from './btn.directive';
import { TitreDirective } from './titre.directive';

@NgModule({
  declarations: [
    LasuitePipe,
    TitrePipe,
    ImageDirective,
    ParagraphDirective,
    BtnDirective,
    TitreDirective,
  ],
  exports: [
    LasuitePipe,
    TitrePipe,
    ImageDirective,
    ParagraphDirective,
    BtnDirective,
    TitreDirective,
  ],
})
export class PartageModule {}
