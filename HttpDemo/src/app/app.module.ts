import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { AddDataComponent } from './add-data/add-data.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomMobileNumberDirective } from './custom-mobile-number.directive';
import { customNumber } from '../app/show-data/customNumber';
import { InterceptorService } from './interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        ShowDataComponent,
        AddDataComponent,
        customNumber,
        CustomMobileNumberDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        Ng2SearchPipeModule,
        Ng2OrderModule,
        NgxPaginationModule,
        FormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
