import { NgModule } from '@angular/core';
import { ZeloMediaWatcherService } from '@zelo/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        ZeloMediaWatcherService
    ]
})
export class ZeloMediaWatcherModule {
    /**
     * Constructor
     */
    constructor(private _zeloMediaWatcherService: ZeloMediaWatcherService) {
    }
}
