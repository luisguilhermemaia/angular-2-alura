import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import { Photo } from "./Photo";

@Injectable()
export class PhotoService {
  private url: string = "http://localhost:3000/v1/fotos";
  private headers = new Headers({ "Content-Type": "application/json" });

  constructor(private http: Http) {}

  getPhotos() {
    return this.http.get(this.url).map((res: Response) => res.json());
  }

  getPhoto(id: number) {
    const url = `${this.url}/${id}`;

    return this.http.get(url).map((res: Response) => res.json());
  }

  create(photo: Photo) {
    return this.http
      .post(this.url, photo, { headers: this.headers })
      .map((res: Response) => res.json());
  }
}
