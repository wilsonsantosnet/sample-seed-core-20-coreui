import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { ManySampleTypeService } from '../manysampletype.service';

import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-manysampletype-field-create',
    templateUrl: './manysampletype-field-create.component.html',
    styleUrls: ['./manysampletype-field-create.component.css']
})
export class ManySampleTypeFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private manySampleTypeService: ManySampleTypeService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

    ngOnChanges() {
       this.ref.detectChanges()
    }

   


}
