import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        path: 'student',
        component: StudentComponent
    },
    {
        path: 'class',
        component: ClassComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchoolRoutingModule { }
