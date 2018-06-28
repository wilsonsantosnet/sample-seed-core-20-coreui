//EXT
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { ManySampleTypeService } from '../manysampletype.service';

@Component({
    selector: 'app-manysampletype-container-filter',
    templateUrl: './manysampletype-container-filter.component.html',
    styleUrls: ['./manysampletype-container-filter.component.css'],
})
export class ManySampleTypeContainerFilterComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private manySampleTypeService: ManySampleTypeService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.manySampleTypeService.initVM();
    }

    ngOnInit() {

       
    }

}
