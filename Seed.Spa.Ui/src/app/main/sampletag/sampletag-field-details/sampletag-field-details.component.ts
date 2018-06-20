
import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-sampletag-field-details',
    templateUrl: './sampletag-field-details.component.html',
    styleUrls: ['./sampletag-field-details.component.css']
})
export class SampleTagFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
