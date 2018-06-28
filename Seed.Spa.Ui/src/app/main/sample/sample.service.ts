//EXT
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Subject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

import { ApiService } from '../../common/services/api.service';
import { ServiceBase } from '../../common/services/service.base';
import { ViewModel } from '../../common/model/viewmodel';
import { GlobalService } from '../../global.service';
import { SampleServiceFields } from './sample.service.fields';
import { GlobalServiceCulture, Translated, TranslatedField } from '../../global.service.culture';
import { MainService } from '../main.service';

@Injectable()
export class SampleService extends ServiceBase {

  private _form: FormGroup;

  constructor(private api: ApiService<any>, private serviceFields: SampleServiceFields, private globalServiceCulture: GlobalServiceCulture, private mainService: MainService) {

    super();
    this._form = this.serviceFields.getFormFields();

  }

  initVM(): ViewModel<any> {

    return new ViewModel({
      mostrarFiltros: false,
      actionTitle: " Sample",
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
    return this.serviceFields.getInfosFields({
      collectionManySampleType: { label: 'collectionManySampleType', type: 'string', isKey: false, list: false }
    });
  }

  getInfoGrid(infos: any) {
    return super.getInfoGrid(infos)
  }

  updateCulture(culture: string = null) {
    return this.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
  }

  updateCultureMain(culture: string = null) {
    return this.mainService.getInfosTranslated(this.globalServiceCulture.defineCulture(culture));
  }

  getInfosTranslated(culture: string) {
    return this.globalServiceCulture.getInfosTranslatedStrategy('Sample', culture, this.getInfos(), []);
  }

  get(filters?: any): Observable<any> {
    return this.api.setResource('Sample').get(filters);
  }

  getDataCustom(filters?: any): Observable<any> {
    return this.api.setResource('Sample').getDataCustom(filters);
  }

  getDataListCustom(filters?: any): Observable<any> {
    return this.api.setResource('Sample').getDataListCustom(filters);
  }

  save(model: any): Observable<any> {

    var newModel = Object.assign(model, { attributeBehavior: "ComplexSave" })

    if (newModel.sampleId != undefined) {
      return this.api.setResource('Sample').put(newModel);
    }

    return this.api.setResource('Sample').post(newModel);
  }

  delete(model: any): Observable<any> {
    return this.api.setResource('Sample').delete(model);
  }

  export(filters?: any): Observable<any> {
    return this.api.setResource('Sample').export(filters);
  }
}
