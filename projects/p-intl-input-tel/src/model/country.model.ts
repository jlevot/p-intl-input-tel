export class Country {
    name: string;
    iso2: string;
    dialCode: string;
    priority: number;
    areaCodes?: string[];
    htmlId: string;
    flagClass: string;
    placeHolder: string;
    isFavorite: boolean;

    constructor() {
        this.name = '';
        this.iso2 = '';
        this.dialCode = '';
        this.priority = 0;
        this.areaCodes = undefined;
        this.htmlId = '';
        this.flagClass = '';
        this.placeHolder = '';
    }
}
