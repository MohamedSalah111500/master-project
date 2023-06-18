import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { LangEnum } from 'src/app/core/enums/lang.enum';
import { TranslationService } from 'src/app/core/services/translation/translation.service';

@Directive({
  selector: '[setRtl]'
})
export class SetRtlDirective {

  constructor(private elRef:ElementRef, private renderer:Renderer2,private translationService:TranslationService) {

    this.switchElementDirection();
   }

  switchElementDirection() {
     let language=this.translationService.getCurrentLanguage();
     console.log(language);
       switch (language) {
        case LangEnum.english:
          this.renderer.removeClass(document.body, 'rtl');
          break;
        case LangEnum.arabic:
          this.renderer.addClass(document.body, 'rtl');
          default:
          break;

   }

}

}
