import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManySampleTypePrintComponent } from './manysampletype-print.component';
import { ManySampleTypePrintRoutingModule } from './manysampletype-print.routing.module';

import { ManySampleTypeService } from '../manysampletype.service';
import { ApiService } from '../../../common/services/api.service';
import { ManySampleTypeServiceFields } from '../manysampletype.service.fields';

import { ManySampleTypeContainerDetailsComponent } from '../manysampletype-container-details/manysampletype-container-details.component';
import { ManySampleTypeFieldDetailsComponent } from '../manysampletype-field-details/manysampletype-field-details.component';
import { CommonSharedModule } from '../../../common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        CommonSharedModule,
        ManySampleTypePrintRoutingModule,
        FormsModule
    ],
    declarations: [
        ManySampleTypePrintComponent,
        ManySampleTypeContainerDetailsComponent,
        ManySampleTypeFieldDetailsComponent
    ],
    providers: [ManySampleTypeService, ApiService, ManySampleTypeServiceFields],
    exports: [ManySampleTypeContainerDetailsComponent,ManySampleTypeFieldDetailsComponent]
})
export class ManySampleTypePrintModule {

}
