import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[favorite]',
    standalone: true
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
