import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { OCRServiceModule } from './service/ocrservice/ocrservice.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    OCRServiceModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
