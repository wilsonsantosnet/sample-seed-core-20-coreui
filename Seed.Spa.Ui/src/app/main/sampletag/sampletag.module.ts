import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { SampleTagComponent } from './sampletag.component';

import { SampleTagContainerFilterComponent } from './sampletag-container-filter/sampletag-container-filter.component';
import { SampleTagFieldFilterComponent } from './sampletag-field-filter/sampletag-field-filter.component';

import { SampleTagEditComponent } from './sampletag-edit/sampletag-edit.component';
import { SampleTagCreateComponent } from './sampletag-create/sampletag-create.component';
import { SampleTagDetailsComponent } from './sampletag-details/sampletag-details.component';

import { SampleTagFieldCreateComponent } from './sampletag-field-create/sampletag-field-create.component';
import { SampleTagFieldEditComponent } from './sampletag-field-edit/sampletag-field-edit.component';

import { SampleTagContainerCreateComponent } from './sampletag-container-create/sampletag-container-create.component';
import { SampleTagContainerEditComponent } from './sampletag-container-edit/sampletag-container-edit.component';

import { SampleTagPrintModule } from './sampletag-print/sampletag-print.module';
import { SampleTagRoutingModule } from './sampletag.routing.module';

import { SampleTagService } from './sampletag.service';
import { SampleTagServiceFields } from './sampletag.service.fields';

import { ApiService } from '../../common/services/api.service';
import { CommonSharedModule } from '../../common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        CommonSharedModule,
        SampleTagRoutingModule,
        SampleTagPrintModule
    ],
    declarations: [
        SampleTagComponent,
        SampleTagContainerFilterComponent,
        SampleTagFieldFilterComponent,
        SampleTagEditComponent,
        SampleTagCreateComponent,
        SampleTagDetailsComponent,
        SampleTagFieldCreateComponent,
        SampleTagFieldEditComponent,
        SampleTagContainerCreateComponent,
        SampleTagContainerEditComponent
    ],
    providers: [SampleTagService,SampleTagServiceFields, ApiService],
})
export class SampleTagModule {


}