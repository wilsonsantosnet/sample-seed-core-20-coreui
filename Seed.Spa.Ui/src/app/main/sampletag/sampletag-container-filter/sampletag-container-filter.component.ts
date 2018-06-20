//EXT
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { SampleTagService } from '../sampletag.service';

@Component({
    selector: 'app-sampletag-container-filter',
    templateUrl: './sampletag-container-filter.component.html',
    styleUrls: ['./sampletag-container-filter.component.css'],
})
export class SampleTagContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private sampleTagService: SampleTagService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.sampleTagService.initVM();
    }

    ngOnInit() {

       
    }

}
