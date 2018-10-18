import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  private OCR_SPACE_KEY = '';

  private MOK_URL_DIPLAYMENT = 'https://api.ocr.space/parse/imageurl?apikey=helloworld&url=http://i.imgur.com/fwxooMv.png';

  constructor(private _http: Http) { }

  public readFileImage(image): Observable<any> {
    return this._http.post('https://api.ocr.space/parse/image', this.formateImageToOCR(image)).pipe(
      map(response => response.json())
    );
  }

  public readUrlImage(url?: string): Observable<any> {
    // 'https://api.ocr.space/parse/ImageUrls'
    return this._http.get(this.MOK_URL_DIPLAYMENT).pipe(
      map(response => response.json())
    );
  }

  private formateImageToOCR(ImageFile, isOverlayRequired?: boolean): FormData {
    const formData = new FormData();
    formData.set('file', ImageFile);
    formData.set('language'   , 'por');
    formData.set('apikey'  , this.OCR_SPACE_KEY);
    formData.set('isOverlayRequired', isOverlayRequired ? 'True' : 'False');
    return formData;
  }

  private muiltpartFormatData(image) {
    const boundary = '----' + (new Date()).getTime();
    const bodyString = [];
    bodyString.push(
      '--' + boundary,
      'Content-Disposition: form-data; name="' + "file" + '";' + 'filename="' + "my_file.jpg" + '"',
      'Content-Type: ' + 'image/jpeg',
      'Content-Transfer-Encoding: base64',
      '', //need /r/n twice here
      image.substring(23) //remove the data:image/jpeg;base64,
    );

    bodyString.push('--' + boundary + '--', '');

    const content = bodyString.join('\r\n');
    return {
      content: content,
      headers: {
        'Content-Type': 'multipart/form-data; boundary=' + boundary,
        'Content-Length': content.length
      }
    }
  }
}
