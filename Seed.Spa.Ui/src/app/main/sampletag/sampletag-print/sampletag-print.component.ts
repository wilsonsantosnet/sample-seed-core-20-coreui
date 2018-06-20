import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';

import { SampleTagService } from '../sampletag.service';
import { ViewModel } from '../../../common/model/viewmodel';

@Component({
    selector: 'app-sampletag-print',
    templateUrl: './sampletag-print.component.html',
    styleUrls: ['./sampletag-print.component.css'],
})
export class SampleTagPrintComponent implements OnInit {

    vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private sampleTagService: SampleTagService, private route: ActivatedRoute) {
        this.vm = this.sampleTagService.initVM();
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        if (this.id)
        {
            this.sampleTagService.get({ id: this.id }).subscribe((data) => {
                this.vm.details = data.data;
            });
        }

    }
    
    onPrint() {
        window.print();
    }
   


}
