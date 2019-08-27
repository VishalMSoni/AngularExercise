import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolRoutingModule } from './school-routing.module';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [StudentComponent, ClassComponent, AdminComponent],
  imports: [
    CommonModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule {

  constructor() {
    console.log('School module works.');
  }
}