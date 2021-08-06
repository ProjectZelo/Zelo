import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HighchartComponent } from 'app/modules/chart/highchart/highchart.component';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HighchartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
