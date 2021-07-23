import { NgModule } from '@angular/core';
import { ZeloTailwindService } from '@zelo/services/tailwind/tailwind.service';

@NgModule({
    providers: [
        ZeloTailwindService
    ]
})
export class ZeloTailwindConfigModule {
    /**
     * Constructor
     */
    constructor(private _zeloTailwindConfigService: ZeloTailwindService) {
    }
}
