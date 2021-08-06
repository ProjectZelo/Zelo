import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HighchartComponent } from 'app/modules/chart/highchart/highchart.component';
import { SharedModule } from 'app/shared/shared.module';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { ChartModule } from 'angular-highcharts';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'app/app.routing';
import { ZeloModule } from '@zelo';
import { ZeloConfigModule } from '@zelo/services/config';
import { appConfig } from 'app/core/config/app.config';
import { ZeloMockApiModule } from '@zelo/lib/mock-api';
import { mockApiServices } from 'app/mock-api';
import { CoreModule } from 'app/core/core.module';
import { MarkdownModule } from 'ngx-markdown';




@NgModule({
  declarations: [
    DashboardComponent,
    HighchartComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedModule,


  ]
})
export class DashboardModule { }
