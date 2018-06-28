import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ServiceBase } from '../../common/services/service.base';

@Injectable()
export class ManySampleTypeServiceFields extends ServiceBase {


  constructor() {
    super()
  }

  getFormFields(moreFormControls?: any) {
    var formControls = Object.assign(moreFormControls || {}, {
      sampleId: new FormControl(),
      sampleTypeId: new FormControl(),
    });
    return new FormGroup(formControls);
  }

  getInfosFields(moreInfosFields?: any, orderByMore = false) {
    var defaultInfosFields = {
      sampleId: { label: 'sampleId', type: 'int', isKey: true, list: true },
      sampleTypeId: { label: 'sampleTypeId', type: 'int', isKey: true, list: true },
    };
    return this.mergeInfoFields(defaultInfosFields, moreInfosFields, orderByMore);
  }
}

