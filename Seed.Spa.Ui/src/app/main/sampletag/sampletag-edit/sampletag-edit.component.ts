import { Component, OnInit, Input,ChangeDetectorRef,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { SampleTagService } from '../sampletag.service';
import { GlobalService, NotificationParameters} from '../../../global.service';
import { LocationHistoryService } from '../../../common/services/location.history';
import { ComponentBase } from '../../../common/components/component.base';

@Component({
    selector: 'app-sampletag-edit',
    templateUrl: './sampletag-edit.component.html',
    styleUrls: ['./sampletag-edit.component.css'],
})
export class SampleTagEditComponent extends ComponentBase implements OnInit, OnDestroy {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private sampleTagService: SampleTagService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {
        super();
        this.vm = null;
    }

    ngOnInit() {

        this.vm = this.sampleTagService.initVM();
        this.vm.actionDescription = "Edição";

        this.sampleTagService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.sampleTagService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
            this.showContainerEdit();
        })

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
