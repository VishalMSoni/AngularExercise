import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DropdownModule
  ]
})
export class UserModule { }
