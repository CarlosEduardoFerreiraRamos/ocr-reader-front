import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcrService } from './ocr.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [OcrService]
})
export class OCRServiceModule { }
