import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  rows: [string];

  file: FileReader;

  url: string | ArrayBuffer;

  onFileChanged(eventd) {
    console.log('file: ', eventd)
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      this.url = (<FileReader>event.target).result;
    }

    reader.readAsDataURL(eventd.target.files[0])
    console.log('reader: ', reader)
    this.file = reader;
  }
}
