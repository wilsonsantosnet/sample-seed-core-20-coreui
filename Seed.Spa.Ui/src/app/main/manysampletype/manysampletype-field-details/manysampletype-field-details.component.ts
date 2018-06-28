
import { Component, OnInit, Input } from '@angular/core';

import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-manysampletype-field-details',
    templateUrl: './manysampletype-field-details.component.html',
    styleUrls: ['./manysampletype-field-details.component.css']
})
export class ManySampleTypeFieldDetailsComponent implements OnInit {


    @Input() vm: ViewModel<any>;

    constructor() { }

    ngOnInit() {

    }

}
