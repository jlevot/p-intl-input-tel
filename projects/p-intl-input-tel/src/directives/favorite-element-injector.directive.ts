import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[favorite]',
})
export class FavoriteElementInjectorDirective implements OnInit {
    private el;

    constructor(el: ElementRef) {
        this.el = el;
    }

    ngOnInit() {
        if (this.el.nativeElement.classList.contains('favorite')) {
            this.el.nativeElement.parentNode.parentNode.classList.add('favoriteItem')
        }
    }
}
