import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ServiceBase } from '../../common/services/service.base';

@Injectable()
export class SampleTagServiceFields extends ServiceBase {


    constructor() {
        super()
    }

    getFormFields(moreFormControls? : any) {
        var formControls = Object.assign(moreFormControls || {},{
            tag : new FormControl(),
            sampletagId : new FormControl(),
            sampleId : new FormControl(),
        });
        return new FormGroup(formControls);
    }

    getInfosFields(moreInfosFields? : any, orderByMore = false) {
        var defaultInfosFields = {
                    tag: { label: 'tag', type: 'string', isKey: false, list:true   },
                    sampletagId: { label: 'sampletagId', type: 'int', isKey: true, list:false   },
                    sampleId: { label: 'sampleId', type: 'int', isKey: false, list:true   },
        };
                return this.mergeInfoFields(defaultInfosFields, moreInfosFields, orderByMore);
    }
}
