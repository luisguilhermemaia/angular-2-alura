import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

import { Photo } from "./Photo";

@Injectable()
export class PhotoService {
  private url: string = "http://localhost:3000/v1/fotos";
  private headers = new Headers({ "Content-Type": "application/json" });

  constructor(private http: Http) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get(this.url).map((res: Response) => res.json());
  }

  getPhoto(id: string): Observable<Photo> {
    const url = `${this.url}/${id}`;

    return this.http.get(url).map((res: Response) => res.json());
  }

  cadastrar(photo: Photo): Observable<MensagemCadastro> {
    if (photo._id) {
      const url = `${this.url}/${photo._id}`;
      return this.http
        .put(url, photo, { headers: this.headers })
        .map(res => new MensagemCadastro("Foto alterada com sucesso", false));
    } else {
      return this.http
        .post(this.url, photo, { headers: this.headers })
        .map(res => new MensagemCadastro("Foto criada com sucesso", true));
    }
  }

  delete(id: string): Observable<MensagemCadastro> {
    const url = `${this.url}/${id}`;
    return this.http
      .delete(url)
      .map(res => new MensagemCadastro("Foto excluida com sucesso", true));
  }
}

export class MensagemCadastro {
  constructor(private _mensagem: string, private _inclusao: boolean) {}

  get mensagem(): string {
    return this._mensagem;
  }

  get inclusao(): boolean {
    return this._inclusao;
  }
}
