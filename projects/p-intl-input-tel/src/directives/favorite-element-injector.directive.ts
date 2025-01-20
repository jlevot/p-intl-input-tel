import { Directive, ElementRef, inject, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[favorite]',
    standalone: true
})
export class FavoriteElementInjectorDirective implements OnInit {
    private el = inject(ElementRef);
    private renderer = inject(Renderer2);

    favoriteItemsCounter = input<number>();

    ngOnInit() {
        const allFavorites = document.querySelectorAll('.favorite');
        if (allFavorites[allFavorites.length - 1] === this.el.nativeElement && allFavorites.length === this.favoriteItemsCounter()) {
            this.renderer.addClass(this.el.nativeElement, 'last-favorite-option');
        }
    }
}
