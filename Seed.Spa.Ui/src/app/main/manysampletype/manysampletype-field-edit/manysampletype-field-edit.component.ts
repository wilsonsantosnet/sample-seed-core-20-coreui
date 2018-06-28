import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

import { ManySampleTypeService } from '../manysampletype.service';

import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-manysampletype-field-edit',
    templateUrl: './manysampletype-field-edit.component.html',
    styleUrls: ['./manysampletype-field-edit.component.css']
})
export class ManySampleTypeFieldEditComponent implements OnInit {

    @Input() vm: ViewModel<any>


    constructor(private manySampleTypeService: ManySampleTypeService, private ref: ChangeDetectorRef) { }

    ngOnInit() { }

    ngOnChanges() {
       this.ref.detectChanges()
    }

        

   
}
