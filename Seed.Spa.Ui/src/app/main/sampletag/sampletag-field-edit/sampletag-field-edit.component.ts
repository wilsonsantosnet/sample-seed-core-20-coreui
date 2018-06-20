import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { SampleTagService } from '../sampletag.service';

import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-sampletag-field-edit',
    templateUrl: './sampletag-field-edit.component.html',
    styleUrls: ['./sampletag-field-edit.component.css']
})
export class SampleTagFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private sampleTagService: SampleTagService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

    ngOnChanges() {
       this.ref.detectChanges()
    }

        

   
}
