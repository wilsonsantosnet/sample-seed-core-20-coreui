import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { ManySampleTypeService } from '../manysampletype.service';
import { LocationHistoryService } from '../../../common/services/location.history';
import { ComponentBase } from "../../../common/components/component.base";

@Component({
    selector: 'app-manysampletype-create',
    templateUrl: './manysampletype-create.component.html',
    styleUrls: ['./manysampletype-create.component.css'],
})
export class ManySampleTypeCreateComponent extends ComponentBase implements OnInit, OnDestroy {

    @Input() vm: ViewModel<any>;
 
    constructor(private manySampleTypeService: ManySampleTypeService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {
        super();
        this.vm = null;
    }

    ngOnInit() {
        this.vm = this.manySampleTypeService.initVM();
        this.vm.actionDescription = "Cadastrar";

        this.manySampleTypeService.detectChanges(this.ref);  
        this.updateCulture();
    }
    
    updateCulture(culture: string = null) {
        this.manySampleTypeService.updateCulture(culture).then((infos: any) => {
            this.vm.infos = infos;
            this.vm.grid = this.manySampleTypeService.getInfoGrid(infos);
        });
    }

    onSave(model : any) {

        this.manySampleTypeService.save(model).subscribe((result) => {
            this.router.navigate([LocationHistoryService.getLastNavigation()])
        });
    }

    ngOnDestroy() {
        this.manySampleTypeService.detectChangesStop();
    }
}
