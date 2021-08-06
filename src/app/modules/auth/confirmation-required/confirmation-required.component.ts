import { Component, ViewEncapsulation } from '@angular/core';
import { zeloAnimations } from '@zelo/animations';

@Component({
    selector: 'auth-confirmation-required',
    templateUrl: './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: zeloAnimations
})
export class AuthConfirmationRequiredComponent {
    /**
     * Constructor
     */
    constructor() {
    }
}
