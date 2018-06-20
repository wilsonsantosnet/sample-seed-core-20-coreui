import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectorRef,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { SampleTagService } from './sampletag.service';
import { ViewModel } from '../../common/model/viewmodel';
import { GlobalService, NotificationParameters} from '../../global.service';
import { ComponentBase } from '../../common/components/component.base';

@Component({
    selector: 'app-sampletag',
    templateUrl: './sampletag.component.html',
    styleUrls: ['./sampletag.component.css'],
})
export class SampleTagComponent extends ComponentBase implements OnInit, OnDestroy {

    vm: ViewModel<any>;

    operationConfimationYes: any;
    changeCultureEmitter: EventEmitter<string>;

    @ViewChild('filterModal') private filterModal: ModalDirective;
    @ViewChild('saveModal') private saveModal: ModalDirective;
    @ViewChild('editModal') private editModal: ModalDirective;
    @ViewChild('detailsModal') private detailsModal: ModalDirective;
    
    constructor(private sampleTagService: SampleTagService, private router: Router, private ref: ChangeDetectorRef) {

        super();
        this.vm = null;
    }

    ngOnInit() {

        this.vm = this.sampleTagService.initVM();
        this.sampleTagService.detectChanges(this.ref);
        this.sampleTagService.OnHide(this.saveModal, this.editModal, () => { this.hideComponents() });

        this.sampleTagService.get().subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });

        this.updateCulture();

        this.changeCultureEmitter = GlobalService.getChangeCultureEmitter().subscribe((culture : any) => {
            this.updateCulture(culture);
        });

    }

    updateCulture(culture: string = null)
    {
        this.sampleTagService.updateCulture(culture).then((infos : any) => {
            this.vm.infos = infos;
            this.vm.grid = this.sampleTagService.getInfoGrid(infos);
        });
        this.sampleTagService.updateCultureMain(culture).then((infos: any) => {
            this.vm.generalInfo = infos;
        });
    }


    public onFilter(modelFilter: any) {

        this.sampleTagService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
            this.filterModal.hide();
        })
    }

    public onExport() {
        this.sampleTagService.export().subscribe((result) => {
            var blob = new Blob([result.blob()], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
            var downloadUrl = window.URL.createObjectURL(blob);
            window.location.href = downloadUrl;
        })
    }

    public onCreate() {

        this.showContainerCreate();
        this.vm.model = {};
        this.saveModal.show();
    }

    public onEdit(model: any) {

        this.vm.model = {};
        let newModel : any = model;
        if (model)
        {
            newModel = { id: model.sampletagId }
        }
        this.sampleTagService.get(newModel).subscribe((result) => {
            this.vm.model = result.dataList ? result.dataList[0] : result.data;
            this.showContainerEdit();
            this.editModal.show();
        })
    }

    public onSave(model: any) {

        this.sampleTagService.save(model).subscribe((result) => {

            this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                return  model.sampletagId != result.data.sampletagId;
            });

            this.vm.filterResult.push(result.data);
            this.vm.summary.total = this.vm.filterResult.length

            if (!this.vm.manterTelaAberta) {
                this.saveModal.hide();
                this.editModal.hide();
                this.hideContainerCreate();
                this.hideContainerEdit();
            }

        });

    }

    public onDetails(model: any) {
    
        this.vm.details = {};
        let newModel : any = model;
        if (model)
        {
            newModel = { id: model.sampletagId }
        }

        this.showContainerDetails();
        this.detailsModal.show();
        this.sampleTagService.get(newModel).subscribe((result) => {
            this.vm.details = result.dataList ? result.dataList[0] : result.data;
        })

    }

    public onCancel() {

        this.saveModal.hide();
        this.editModal.hide();
        this.detailsModal.hide();
        this.filterModal.hide();
        this.hideComponents();
    }

    public onShowFilter() {
        this.showContainerFilters();
        this.filterModal.show();
    }

    public onClearFilter() {
          this.vm.modelFilter = {};
        GlobalService.getNotificationEmitter().emit(new NotificationParameters("init", {
            model: {}
        }));
    }

    public onPrint(model: any) {
        this.router.navigate(['/sampletag/print', model.sampletagId]);
    }

    public onDeleteConfimation(model: any) {

        var conf = GlobalService.operationExecutedParameters(
            "confirm-modal",
            () => {
                let newModel : any = model;
                if (model)
                {    
                    newModel = { id: model.sampletagId }
                }
                this.sampleTagService.delete(newModel).subscribe((result) => {
                    this.vm.filterResult = this.vm.filterResult.filter(function (model) {
                        return  model.sampletagId != result.data.sampletagId;
                    });
                    this.vm.summary.total = this.vm.filterResult.length
                });
            }
        );

        GlobalService.getOperationExecutedEmitter().emit(conf);
    }

    public onConfimationYes() {
        this.operationConfimationYes();
    }

    public onPageChanged(pageConfig: any) {

        let modelFilter = this.sampleTagService.pagingConfig(this.vm.modelFilter, pageConfig);
        this.sampleTagService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    public onOrderBy(order: any) {

        let modelFilter = this.sampleTagService.orderByConfig(this.vm.modelFilter, order);
        this.sampleTagService.get(modelFilter).subscribe((result) => {
            this.vm.filterResult = result.dataList;
            this.vm.summary = result.summary;
        });
    }

    ngOnDestroy() {
        this.changeCultureEmitter.unsubscribe();
        this.sampleTagService.detectChangesStop();
    }

}
