import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { BuyComponent } from './modules/admin/buy/buy.component';
import { EarnComponent } from './modules/admin/earn/earn.component';
import { ReceiveComponent } from './modules/admin/receive/receive.component';
import { SendComponent } from './modules/admin/send/send.component';
import { RoboComponent } from './modules/admin/robo/robo.component';
import { SchemeComponent } from './layout/common/scheme/scheme.component';
import { DashboardResolver } from './modules/admin/dashboard/dashboard.resolvers';
import { EnterpriseLayoutComponent } from './layout/layouts/horizontal/enterprise/enterprise.component';



const routes: Routes = [

    // Redirect empty path to '/example'
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'dashboard' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: EnterpriseLayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {
                path: 'confirmation-required', loadChildren: () =>
                    import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)
            },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule) },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule) },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule) }
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: EnterpriseLayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule) },
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule) }


        ]
    },

    // Landing routes
    {
        path: '',
        component: EnterpriseLayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule) },
        ]
    },

    // Admin routes
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: EnterpriseLayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
            data: DashboardResolver
        },

        loadChildren: () => import('./modules/admin/dashboard/dashboard.module').then(m => m.DashboardModule)


    },

    {
        path: 'buy',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: EnterpriseLayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },

        loadChildren: () => import('./modules/admin/buy/buy.module').then(m => m.BuyModule)





    },
    {
        path: 'earn',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: EnterpriseLayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },

        loadChildren: () => import('./modules/admin/earn/earn.module').then(m => m.EarnModule)



    },
    {
        path: 'receive',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: EnterpriseLayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },

        loadChildren: () => import('./modules/admin/receive/receive.module').then(m => m.ReceiveModule)


    },
    {
        path: 'robo',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: EnterpriseLayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },

        loadChildren: () => import('./modules/admin/robo/robo.module').then(m => m.RoboModule)


    },
    {
        path: 'send',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: EnterpriseLayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },

        loadChildren: () => import('./modules/admin/send/send.module').then(m => m.SendModule)


    },




];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }