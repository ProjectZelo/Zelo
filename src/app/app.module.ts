import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ZeloModule } from '@zelo';
import { ZeloConfigModule } from '@zelo/services/config';
import { ZeloMockApiModule } from '@zelo/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';

import { SharedModule } from './shared/shared.module';
import highmaps from 'highcharts/modules/map.src';
import more from 'highcharts/highcharts-more.src';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

export function highchartsModules() {
    return [more, highmaps];
}

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [

        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        // Zelo, ZeloConfig & ZeloMockAPI
        ZeloModule,
        ZeloConfigModule.forRoot(appConfig),
        ZeloMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],
    providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
    bootstrap: [
        AppComponent
    ],

})
export class AppModule {
}
