import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SampleTagComponent } from './sampletag.component';
import { SampleTagEditComponent } from './sampletag-edit/sampletag-edit.component';
import { SampleTagDetailsComponent } from './sampletag-details/sampletag-details.component';
import { SampleTagCreateComponent } from './sampletag-create/sampletag-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', data : { title : "SampleTag" }, component: SampleTagComponent },
            { path: 'edit/:id', data : { title : "SampleTag" } ,component: SampleTagEditComponent },
            { path: 'details/:id', data : { title : "SampleTag" }, component: SampleTagDetailsComponent },
            { path: 'create', data : { title : "SampleTag" }, component: SampleTagCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class SampleTagRoutingModule {
}