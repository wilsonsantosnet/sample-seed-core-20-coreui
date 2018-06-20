import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { SampleTagService } from '../sampletag.service';

import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-sampletag-field-create',
    templateUrl: './sampletag-field-create.component.html',
    styleUrls: ['./sampletag-field-create.component.css']
})
export class SampleTagFieldCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;


   constructor(private sampleTagService: SampleTagService, private ref: ChangeDetectorRef) { }

    ngOnInit() {}

    ngOnChanges() {
       this.ref.detectChanges()
    }

   


}
