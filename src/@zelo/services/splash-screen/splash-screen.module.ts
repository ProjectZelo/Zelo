import { NgModule } from '@angular/core';
import { ZeloSplashScreenService } from '@zelo/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        ZeloSplashScreenService
    ]
})
export class ZeloSplashScreenModule {
    /**
     * Constructor
     */
    constructor(private _zeloSplashScreenService: ZeloSplashScreenService) {
    }
}
