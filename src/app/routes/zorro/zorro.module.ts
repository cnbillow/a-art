import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ZorroRoutingModule } from './zorro-routing.module';
import { TableComponent } from './table/table.component';

const COMPONENTS = [
  TableComponent
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ZorroRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class ZorroModule { }
