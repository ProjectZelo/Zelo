import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ZeloMediaWatcherModule } from '@zelo/services/media-watcher/media-watcher.module';
import { ZeloSplashScreenModule } from '@zelo/services/splash-screen/splash-screen.module';
import { ZeloTailwindConfigModule } from '@zelo/services/tailwind/tailwind.module';
import { ZeloUtilsModule } from '@zelo/services/utils/utils.module';

@NgModule({
    imports: [
        ZeloMediaWatcherModule,
        ZeloSplashScreenModule,
        ZeloTailwindConfigModule,
        ZeloUtilsModule
    ],
    providers: [
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class ZeloModule {
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: ZeloModule) {
        if (parentModule) {
            throw new Error('ZeloModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
