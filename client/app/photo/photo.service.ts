import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import "rxjs/add/operator/toPromise";
import { Photo } from "./Photo";

@Injectable()
export class PhotoService {
  private url: string = "http://localhost:3000/v1/fotos";

  private photos: Photo[];

  constructor(private http: Http) {}

  getPhotos(): Promise<Photo[]> {
    return this.http
      .get(this.url)
      .toPromise()
      .then(response => {
        return response.json() as Photo[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
