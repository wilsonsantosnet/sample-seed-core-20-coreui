import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-manysampletype-field-filter',
    templateUrl: './manysampletype-field-filter.component.html',
    styleUrls: ['./manysampletype-field-filter.component.css']
})
export class ManySampleTypeFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
