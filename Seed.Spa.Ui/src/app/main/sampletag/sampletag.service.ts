//EXT
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from '../../common/services/api.service';
import { ServiceBase } from '../../common/services/service.base';
import { ViewModel } from '../../common/model/viewmodel';
import { GlobalService } from '../../global.service';
import { SampleTagServiceFields } from './sampletag.service.fields';
import { GlobalServiceCulture, Translated, TranslatedField } from '../../global.service.culture';
import { MainService } from '../main.service';

@Injectable()
export class SampleTagService extends ServiceBase {

    private _form : FormGroup;

    constructor(private api: ApiService<any>,private serviceFields: SampleTagServiceFields, private globalServiceCulture: GlobalServiceCulture, private mainService: MainService) {

        super();
        this._form = this.serviceFields.getFormFields();

    }

    initVM(): ViewModel<any> {

        return new ViewModel({
            mostrarFiltros: false,
            actionTitle: " SampleTag",
            actionDescription: "",
            downloadUri: GlobalService.getEndPoints().DOWNLOAD,
            filterResult: [],
            modelFilter: {},
            summary: {},
            model: {},
            details: {},
            infos: this.getInfos(),
            grid: this.getInfoGrid(this.getInfos()),
            generalInfo: this.mainService.getInfos(),
            form: this._form,
            masks: this.masksConfig()
        });
    }

    getInfos() {
        return this.serviceFields.getInfosFields();
    }

    getInfoGrid(infos : any) {
        return super.getInfoGrid(infos)
    }

    updateCulture(culture: string = null) {
        return this.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
    }

    updateCultureMain(culture: string = null) {
        return this.mainService.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
    }

    getInfosTranslated(culture: string) {
        return this.globalServiceCulture.getInfosTranslatedStrategy('SampleTag', culture, this.getInfos(), []);
    }

    get(filters?: any): Observable<any> {
        return this.api.setResource('SampleTag').get(filters);
    }

    getDataCustom(filters?: any): Observable<any> {
        return this.api.setResource('SampleTag').getDataCustom(filters);
    }

    getDataListCustom(filters?: any): Observable<any> {
        return this.api.setResource('SampleTag').getDataListCustom(filters);
    }

    save(model: any): Observable<any> {

        if ( model.sampletagId != undefined) {
            return this.api.setResource('SampleTag').put(model);
        }

        return this.api.setResource('SampleTag').post(model);
    }

    delete(model: any): Observable<any> {
        return this.api.setResource('SampleTag').delete(model);
    }
    
    export(filters?: any): Observable<any> {
        return this.api.setResource('SampleTag').export(filters);
    }
}
