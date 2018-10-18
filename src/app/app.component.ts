import { Component } from '@angular/core';
import { OcrService } from './service/ocrservice/ocr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _ocrService: OcrService) {}

  title = 'app';

  rows: [string];

  file: any;

  answer: any;

  url: string | ArrayBuffer;

  public onFileChanged(eventd) {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      this.url = (<FileReader>event.target).result;
    };

    this.file = eventd.target.files[0];
    reader.readAsDataURL(this.file);
  }

  public onReadUrlImage(): void {
    this._ocrService.readUrlImage().subscribe( res => {
      this.answer = res;
      this.rows = res.ParsedResults.map( obj => obj.ParsedText);
      this.url = 'http://i.imgur.com/fwxooMv.png';
    });
  }

  public onReadFIleImage(): void {
    this._ocrService.readFileImage(this.file).subscribe( res => {
      this.answer = res;
      this.rows = res.ParsedResults.map( obj => obj.ParsedText);
    });
  }
}
