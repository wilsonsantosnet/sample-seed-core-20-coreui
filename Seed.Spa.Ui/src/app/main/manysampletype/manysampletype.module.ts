import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ManySampleTypeComponent } from './manysampletype.component';

import { ManySampleTypeContainerFilterComponent } from './manysampletype-container-filter/manysampletype-container-filter.component';
import { ManySampleTypeFieldFilterComponent } from './manysampletype-field-filter/manysampletype-field-filter.component';

import { ManySampleTypeEditComponent } from './manysampletype-edit/manysampletype-edit.component';
import { ManySampleTypeCreateComponent } from './manysampletype-create/manysampletype-create.component';
import { ManySampleTypeDetailsComponent } from './manysampletype-details/manysampletype-details.component';

import { ManySampleTypeFieldCreateComponent } from './manysampletype-field-create/manysampletype-field-create.component';
import { ManySampleTypeFieldEditComponent } from './manysampletype-field-edit/manysampletype-field-edit.component';

import { ManySampleTypeContainerCreateComponent } from './manysampletype-container-create/manysampletype-container-create.component';
import { ManySampleTypeContainerEditComponent } from './manysampletype-container-edit/manysampletype-container-edit.component';

import { ManySampleTypePrintModule } from './manysampletype-print/manysampletype-print.module';
import { ManySampleTypeRoutingModule } from './manysampletype.routing.module';

import { ManySampleTypeService } from './manysampletype.service';
import { ManySampleTypeServiceFields } from './manysampletype.service.fields';

import { ApiService } from '../../common/services/api.service';
import { CommonSharedModule } from '../../common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        CommonSharedModule,
        ManySampleTypeRoutingModule,
        ManySampleTypePrintModule
    ],
    declarations: [
        ManySampleTypeComponent,
        ManySampleTypeContainerFilterComponent,
        ManySampleTypeFieldFilterComponent,
        ManySampleTypeEditComponent,
        ManySampleTypeCreateComponent,
        ManySampleTypeDetailsComponent,
        ManySampleTypeFieldCreateComponent,
        ManySampleTypeFieldEditComponent,
        ManySampleTypeContainerCreateComponent,
        ManySampleTypeContainerEditComponent
    ],
    providers: [ManySampleTypeService,ManySampleTypeServiceFields, ApiService],
})
export class ManySampleTypeModule {


}