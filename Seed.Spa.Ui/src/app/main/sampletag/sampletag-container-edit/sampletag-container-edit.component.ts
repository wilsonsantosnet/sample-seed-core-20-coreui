//EXT
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { SampleTagService } from '../sampletag.service';

@Component({
    selector: 'app-sampletag-container-edit',
    templateUrl: './sampletag-container-edit.component.html',
    styleUrls: ['./sampletag-container-edit.component.css'],
})
export class SampleTagContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private sampleTagService: SampleTagService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.sampleTagService.initVM();
    }

    ngOnInit() {

       
    }

}
