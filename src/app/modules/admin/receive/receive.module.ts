import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ReceiveComponent } from './receive.component';


const receiveRoutes: Route[] = [
    {
        path     : '',
        component: ReceiveComponent
    }
];

@NgModule({
    declarations: [
        ReceiveComponent
    ],
    imports     : [
        RouterModule.forChild(receiveRoutes)
    ]
})
export class ReceiveModule
{
}
