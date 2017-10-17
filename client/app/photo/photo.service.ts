import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Photo } from "./Photo";

@Injectable()
export class PhotoService {
  private url: string = "http://localhost:3000/v1/fotos";

  constructor(private http: Http) {}

  getPhotos() {
    return this.http.get(this.url).map((res:Response) => res.json());
  }
}
