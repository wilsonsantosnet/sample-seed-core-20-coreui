//EXT
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { ManySampleTypeService } from '../manysampletype.service';

@Component({
    selector: 'app-manysampletype-container-create',
    templateUrl: './manysampletype-container-create.component.html',
    styleUrls: ['./manysampletype-container-create.component.css'],
})
export class ManySampleTypeContainerCreateComponent implements OnInit {

    @Input() vm: ViewModel<any>;
  
    constructor(private manySampleTypeService: ManySampleTypeService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.manySampleTypeService.initVM();
    }

    ngOnInit() {

       
    }

}
