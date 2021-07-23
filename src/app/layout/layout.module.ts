import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ZeloDrawerModule } from '@zelo/components/drawer';
import { LayoutComponent } from 'app/layout/layout.component';

import { EnterpriseLayoutModule } from 'app/layout/layouts/horizontal/enterprise/enterprise.module';

import { SharedModule } from 'app/shared/shared.module';

const layoutModules = [


    // Horizontal navigation

    EnterpriseLayoutModule,

];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        MatIconModule,
        MatTooltipModule,
        ZeloDrawerModule,
        SharedModule,
        ...layoutModules
    ],
    exports: [
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule {
}
