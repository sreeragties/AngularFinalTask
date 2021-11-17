import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewIndividualDetailsComponent } from './view-individual-details/view-individual-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ViewDetailsComponent,
    ViewIndividualDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
