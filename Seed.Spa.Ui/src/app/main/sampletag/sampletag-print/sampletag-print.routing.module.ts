import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SampleTagPrintComponent } from './sampletag-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: SampleTagPrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  SampleTagPrintRoutingModule {

}