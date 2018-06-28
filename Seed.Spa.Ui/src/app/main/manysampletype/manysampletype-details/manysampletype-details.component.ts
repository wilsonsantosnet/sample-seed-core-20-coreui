import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { ManySampleTypeService } from '../manysampletype.service';

@Component({
    selector: 'app-manysampletype-details',
    templateUrl: './manysampletype-details.component.html',
    styleUrls: ['./manysampletype-details.component.css'],
})
export class ManySampleTypeDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private manySampleTypeService: ManySampleTypeService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.manySampleTypeService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        if (this.id) {
            this.manySampleTypeService.get({ id: this.id }).subscribe((data) => {
                this.vm.details = data.data;
            })
        };
        this.updateCulture();
    }
    
    updateCulture(culture: string = null) {
        this.manySampleTypeService.updateCulture(culture).then((infos: any) => {
            this.vm.infos = infos;
            this.vm.grid = this.manySampleTypeService.getInfoGrid(infos);
        });
    }

    
}
