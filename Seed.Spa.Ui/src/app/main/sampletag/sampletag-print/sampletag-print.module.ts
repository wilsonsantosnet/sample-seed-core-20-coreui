import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SampleTagPrintComponent } from './sampletag-print.component';
import { SampleTagPrintRoutingModule } from './sampletag-print.routing.module';

import { SampleTagService } from '../sampletag.service';
import { ApiService } from '../../../common/services/api.service';
import { SampleTagServiceFields } from '../sampletag.service.fields';

import { SampleTagContainerDetailsComponent } from '../sampletag-container-details/sampletag-container-details.component';
import { SampleTagFieldDetailsComponent } from '../sampletag-field-details/sampletag-field-details.component';
import { CommonSharedModule } from '../../../common/common-shared.module';

@NgModule({
    imports: [
        CommonModule,
        CommonSharedModule,
        SampleTagPrintRoutingModule,
        FormsModule
    ],
    declarations: [
        SampleTagPrintComponent,
        SampleTagContainerDetailsComponent,
        SampleTagFieldDetailsComponent
    ],
    providers: [SampleTagService, ApiService, SampleTagServiceFields],
    exports: [SampleTagContainerDetailsComponent,SampleTagFieldDetailsComponent]
})
export class SampleTagPrintModule {

}
