import { NgModule } from '@angular/core';
import { ZeloUtilsService } from '@zelo/services/utils/utils.service';

@NgModule({
    providers: [
        ZeloUtilsService
    ]
})
export class ZeloUtilsModule {
    /**
     * Constructor
     */
    constructor(private _zeloUtilsService: ZeloUtilsService) {
    }
}
