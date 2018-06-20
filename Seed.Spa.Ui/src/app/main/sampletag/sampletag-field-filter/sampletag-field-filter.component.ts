import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-sampletag-field-filter',
    templateUrl: './sampletag-field-filter.component.html',
    styleUrls: ['./sampletag-field-filter.component.css']
})
export class SampleTagFieldFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>

    constructor() { }

    ngOnInit() {
    }

}
