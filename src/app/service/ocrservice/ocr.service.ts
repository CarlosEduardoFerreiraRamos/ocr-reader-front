import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  private MOK_URL_DIPLAYMENT = 'https://api.ocr.space/parse/imageurl?apikey=helloworld&url=http://i.imgur.com/fwxooMv.png';

  constructor(private _http: Http) { }

  public readFileImage(image): Observable<any> {
    return this._http.post('https://api.ocr.space/parse/image', {});
  }

  public readUrlImage(url?: string): Observable<any> {
    // 'https://api.ocr.space/parse/ImageUrls'
    return this._http.get(this.MOK_URL_DIPLAYMENT).pipe(
      map(response => response.json())
    );
  }
}
