import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { EarnComponent } from './modules/admin/earn/earn.component';
import { RoboComponent } from './modules/admin/robo/robo.component';
import { ReceiveComponent } from './modules/admin/receive/receive.component';
import { SendComponent } from './modules/admin/send/send.component';
import { SharedModule } from './shared/shared.module';
import highmaps from 'highcharts/modules/map.src';
import more from 'highcharts/highcharts-more.src';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { HighchartComponent } from './modules/chart/highchart/highchart.component'

export function highchartsModules() {
    return [more, highmaps];
}

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
};

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        EarnComponent,
        RoboComponent,
        ReceiveComponent,
        SendComponent,
        HighchartComponent,

    ],
    imports: [

        SharedModule,
        BrowserModule,
        ChartModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

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
