import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManySampleTypeComponent } from './manysampletype.component';
import { ManySampleTypeEditComponent } from './manysampletype-edit/manysampletype-edit.component';
import { ManySampleTypeDetailsComponent } from './manysampletype-details/manysampletype-details.component';
import { ManySampleTypeCreateComponent } from './manysampletype-create/manysampletype-create.component';
import { GlobalService } from '../../global.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', data : { title : "ManySampleType" }, component: ManySampleTypeComponent },
            { path: 'edit/:id', data : { title : "ManySampleType" } ,component: ManySampleTypeEditComponent },
            { path: 'details/:id', data : { title : "ManySampleType" }, component: ManySampleTypeDetailsComponent },
            { path: 'create', data : { title : "ManySampleType" }, component: ManySampleTypeCreateComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ManySampleTypeRoutingModule {
}