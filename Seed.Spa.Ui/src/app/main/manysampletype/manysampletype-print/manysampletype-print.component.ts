import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { ManySampleTypeService } from '../manysampletype.service';
import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-manysampletype-print',
    templateUrl: './manysampletype-print.component.html',
    styleUrls: ['./manysampletype-print.component.css'],
})
export class ManySampleTypePrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private manySampleTypeService: ManySampleTypeService, private route: ActivatedRoute) {
        this.vm = this.manySampleTypeService.initVM();
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        if (this.id)
        {
            this.manySampleTypeService.get({ id: this.id }).subscribe((data) => {
                this.vm.details = data.data;
            });
        }

    }
    
    onPrint() {
        window.print();
    }
   


}
