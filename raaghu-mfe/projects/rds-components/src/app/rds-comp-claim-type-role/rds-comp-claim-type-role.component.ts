import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
import { TableAction } from '../../models/table-action.model';
import { TableHeader } from '../../models/table-header.model';

export class claims {
  id: any;
  claimType: string;
  claimValue: string;
}

@Component({
  selector: 'rds-comp-claim-type-role',
  templateUrl: './rds-comp-claim-type-role.component.html',
  styleUrls: ['./rds-comp-claim-type-role.component.scss']
})
export class RdsCompClaimTypeRoleComponent implements OnInit {

  ClaimData: claims = {
    id: undefined,
    claimType: '',
    claimValue: '',
  };
  @Input() claimDisplayArray: any[] = [];

  @Input() claimValueData: any[] = [];
  @Output() addClaim = new EventEmitter();
  @Output() deleteClaim = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onClaimSave = new EventEmitter();
  @Input() claimsActions: any = [];
  rdsDataTableClaimType: ComponentLoaderOptions;
  actions: TableAction[] = [{ id: 'delete', displayName: 'Delete' }];
  ClaimTableHeader: TableHeader[] = [
    { displayName: 'Type', key: 'claimType', dataType: 'text', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Value', key: 'claimValue', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ];

  sampleDelete: any
  constructor(public translate: TranslateService) { }
  ngOnInit(): void {
  }

  onActionSelection(event: any) :void {
    if (event && event.selectedData) {
      if (event.actionId === 'delete') {
        const data = [...this.claimDisplayArray];

        const index = data.findIndex(
          (x: any) => x.Id == event.selectedData.Id
        );
        if (index !== -1) {
          data.splice(index, 1);
          this.claimDisplayArray = [...data];
          this.deleteClaim.emit(this.claimDisplayArray);
          // this.onPropertyResourceSave.emit({ Property: this.propertyTableData });
        }
      }
    }
  }
  addClaimData(claimForm: NgForm) {

    if (claimForm.form.value && claimForm.valid) {
      
      const item: any = {
        id: this.claimDisplayArray.length + 1,
        claimType: this.ClaimData.claimType,
        claimValue: claimForm.form.value.claimValue
      }
      this.addClaim.emit(item);
      this.onClaimSave.next(null);
      claimForm.reset();
    }
  }


  selectedClaimType(event: any) {
    this.ClaimData.claimType = event.item.value;
  }

  onCancelClaimType(claimDataForm: NgForm) {
    claimDataForm.reset();
    this.claimValueData = [];
    this.claimDisplayArray = [];
    this.onCancel.next(true);
  }

  saveClaim(claimForm: NgForm) {
    this.onClaimSave.next(this.claimDisplayArray);
  }

}
