import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManySampleTypePrintComponent } from './manysampletype-print.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ManySampleTypePrintComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class  ManySampleTypePrintRoutingModule {

}