import { Component, OnInit } from "@angular/core";
import { Photo } from "../photo/Photo";
import { PhotoService } from "../photo/photo.service";

@Component({
  selector: "cadastro",
  template: `
    <div class="container">
        <form class="row" (submit)="cadastrar($event)">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Título</label>
                    <input name="titulo" [(ngModel)]="photo.titulo" class="form-control"  autocomplete="off">    
                </div>
                <div class="form-group">
                    <label>URL</label>
                    <input name="url" [(ngModel)]="photo.url" class="form-control"  autocomplete="off">
                </div>
                <div class="form-group">
                    <label>Descrição</label>
                    <textarea name="descricao" [(ngModel)]="photo.descricao" class="form-control"  autocomplete="off">
                    </textarea>
                </div>
    
                <button type="submit" class="btn btn-primary">
                    Salvar
                </button>
                <a [routerLink]="['']" class="btn btn-primary">Voltar</a>
                <hr>
            </div>
        </form>
    </div>
    `
})
export class CadastroComponent implements OnInit{
  constructor(private photoService: PhotoService, private photo: Photo) {}

  ngOnInit(): void {
      this.photo = new Photo('trftdf','trftdf',1,'trftdf','trftdf');
  }
}
