//EXT
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { SampleTagService } from '../sampletag.service';

@Component({
    selector: 'app-sampletag-container-create',
    templateUrl: './sampletag-container-create.component.html',
    styleUrls: ['./sampletag-container-create.component.css'],
})
export class SampleTagContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private sampleTagService: SampleTagService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.sampleTagService.initVM();
    }

    ngOnInit() {

       
    }

}
