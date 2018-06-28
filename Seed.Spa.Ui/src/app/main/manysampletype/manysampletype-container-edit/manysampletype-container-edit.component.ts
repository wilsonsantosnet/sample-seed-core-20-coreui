//EXT
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { ManySampleTypeService } from '../manysampletype.service';

@Component({
    selector: 'app-manysampletype-container-edit',
    templateUrl: './manysampletype-container-edit.component.html',
    styleUrls: ['./manysampletype-container-edit.component.css'],
})
export class ManySampleTypeContainerEditComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private manySampleTypeService: ManySampleTypeService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.manySampleTypeService.initVM();
    }

    ngOnInit() {

       
    }

}
