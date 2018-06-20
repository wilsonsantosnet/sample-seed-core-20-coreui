import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { SampleTagService } from '../sampletag.service';
import { LocationHistoryService } from '../../../common/services/location.history';
import { ComponentBase } from "../../../common/components/component.base";

@Component({
    selector: 'app-sampletag-create',
    templateUrl: './sampletag-create.component.html',
    styleUrls: ['./sampletag-create.component.css'],
})
export class SampleTagCreateComponent extends ComponentBase implements OnInit, OnDestroy {

    @Input() vm: ViewModel<any>;
 
    constructor(private sampleTagService: SampleTagService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {
        super();
        this.vm = null;
    }

    ngOnInit() {
        this.vm = this.sampleTagService.initVM();
        this.vm.actionDescription = "Cadastrar";

        this.sampleTagService.detectChanges(this.ref);  
        this.updateCulture();
    }
    
    updateCulture(culture: string = null) {
        this.sampleTagService.updateCulture(culture).then((infos: any) => {
            this.vm.infos = infos;
            this.vm.grid = this.sampleTagService.getInfoGrid(infos);
        });
    }

    onSave(model : any) {

        this.sampleTagService.save(model).subscribe((result) => {
            this.router.navigate([LocationHistoryService.getLastNavigation()])
        });
    }

    ngOnDestroy() {
        this.sampleTagService.detectChangesStop();
    }
}
