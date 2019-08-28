import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ShowDataComponent } from './components/show-data/show-data.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from '../interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomMobileNumberDirective } from '../custom-mobile-number.directive';
import { customNumber } from './components/show-data/customNumber';

@NgModule({
  declarations: [
    ListStudentComponent,
    AddDataComponent,
    ShowDataComponent,
    customNumber,
    CustomMobileNumberDirective],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ]
})
export class StudentModule { }
