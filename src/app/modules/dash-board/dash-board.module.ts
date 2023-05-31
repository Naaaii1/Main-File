import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {Routes, RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { AddFormComponent } from './add-form/add-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { IssuesComponent } from './issues/issues.component';
import { IssuesCardComponent } from './issues-card/issues-card.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryTableComponent } from './inventory-table/inventory-table.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { ApprovalsCardComponent } from './approvals-card/approvals-card.component';

import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:"",
    component:DashBoardComponent,
    children:[
      {
        path:"home",
        component:AddFormComponent
      },
      {
        path:"issues",
        component:IssuesComponent
      },
      {
        path:"inventory",
        component:InventoryComponent
      },
      {
        path:"approvals",
        component:ApprovalsComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    DashBoardComponent,
    AddFormComponent,
    IssuesComponent,
    IssuesCardComponent,
    InventoryComponent,
    InventoryTableComponent,
    ApprovalsComponent,
    ApprovalsCardComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class DashBoardModule { }
