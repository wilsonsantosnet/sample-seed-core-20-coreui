import { Component, OnInit, Input,ChangeDetectorRef,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewModel } from '../../../common/model/viewmodel';
import { ManySampleTypeService } from '../manysampletype.service';
import { GlobalService, NotificationParameters} from '../../../global.service';
import { LocationHistoryService } from '../../../common/services/location.history';
import { ComponentBase } from '../../../common/components/component.base';

@Component({
    selector: 'app-manysampletype-edit',
    templateUrl: './manysampletype-edit.component.html',
    styleUrls: ['./manysampletype-edit.component.css'],
})
export class ManySampleTypeEditComponent extends ComponentBase implements OnInit, OnDestroy {

    @Input() vm: ViewModel<any>;
    id: number;
    private sub: any;

    constructor(private manySampleTypeService: ManySampleTypeService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {
        super();
        this.vm = null;
    }

    ngOnInit() {

        this.vm = this.manySampleTypeService.initVM();
        this.vm.actionDescription = "Edição";

        this.manySampleTypeService.detectChanges(this.ref);

        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; 
        });

        this.manySampleTypeService.get({ id: this.id }).subscribe((data) => {
            this.vm.model = data.data;
            this.showContainerEdit();
        })

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
