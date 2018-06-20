import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { SampleTagService } from '../sampletag.service';

@Component({
    selector: 'app-sampletag-details',
    templateUrl: './sampletag-details.component.html',
    styleUrls: ['./sampletag-details.component.css'],
})
export class SampleTagDetailsComponent implements OnInit {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private sampleTagService: SampleTagService, private route: ActivatedRoute, private router: Router) {

        this.vm = this.sampleTagService.initVM();

    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        if (this.id) {
            this.sampleTagService.get({ id: this.id }).subscribe((data) => {
                this.vm.details = data.data;
            })
        };
        this.updateCulture();
    }
    
    updateCulture(culture: string = null) {
        this.sampleTagService.updateCulture(culture).then((infos: any) => {
            this.vm.infos = infos;
            this.vm.grid = this.sampleTagService.getInfoGrid(infos);
        });
    }

    
}
