import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './common/services/auth.guard';

const APP_ROUTES_DEFAULT: Routes = [

    {
        path: '', component: MainComponent, data : { title : "Main" }, children: [

            { path: 'sample',  canActivate: [AuthGuard], loadChildren: './main/sample/sample.module#SampleModule' },

            { path: 'sampletype',  canActivate: [AuthGuard], loadChildren: './main/sampletype/sampletype.module#SampleTypeModule' },

            { path: 'sampletag',  canActivate: [AuthGuard], loadChildren: './main/sampletag/sampletag.module#SampleTagModule' },

            { path: 'sampledash',  canActivate: [AuthGuard], loadChildren: './main/sampledash/sampledash.module#SampleDashModule' }

            ]
    },

    { path: 'sample/print/:id', canActivate: [AuthGuard], loadChildren: './main/sample/sample-print/sample-print.module#SamplePrintModule' },

    { path: 'sampletype/print/:id', canActivate: [AuthGuard], loadChildren: './main/sampletype/sampletype-print/sampletype-print.module#SampleTypePrintModule' },

    { path: 'sampletag/print/:id', canActivate: [AuthGuard], loadChildren: './main/sampletag/sampletag-print/sampletag-print.module#SampleTagPrintModule' },


]


export const RoutingDefault: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES_DEFAULT);


