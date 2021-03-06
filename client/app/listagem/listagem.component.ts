import { PainelComponent } from './../painel/painel.component';
import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";

@Component({
  moduleId: module.id,
  selector: "listagem",
  template: `
    <div class="jumbotron">
        <h1 class="text-center">
            Alurapic
        </h1>
    </div>
    <div class="container">
        <p *ngIf="message.length" class="alert alert-info">
            {{message}}
        </p>
        <div class="row">
            <div class="col-md-12">
                <form>
                    <div class="input-group">
                        <span class="input-group-btn">
                            <a [routerLink]="['/cadastro']" class="btn btn-primary"> Nova foto</a>
                        </span>
                        <input class="form-control" #textoProcurado (keyup)="0" placeholder="filtrar pelo titulo da foto">
                        
                    </div>
                </form>
            </div>
        </div>
        <br>
        <div class="row">
            <painel #painel *ngFor="let photo of photos | filtroPorTitulo: textoProcurado.value" titulo="{{photo.titulo | uppercase}}" class="col-md-2">
            <a [routerLink]="['/cadastro', photo._id]">
                <photo url="{{photo.url}}" titulo="{{photo.titulo}}"></photo>
            </a>   
            <botao nome="Remover" estilo="btn-danger btn-block" (acao)="modal.show()" [confirmacao]="false"></botao>
            <modal #modal frase="Tem certeza que deseja remover esta foto?" (confirma)="remove(photo, painel)"></modal>
            </painel>
        </div>
    </div>
    `
})
export class ListagemComponent implements OnInit {
  photos: Photo[] = [];
  message: string = '';

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(data => (this.photos = data));
  }

  remove(photo: Photo, painel: PainelComponent) {
    return this.photoService.delete(photo._id).subscribe((res) => {
        painel.fadeOut(() => {
            let novasFotos = this.photos.slice(0);
            const index = novasFotos.indexOf(photo);
            novasFotos.splice(index, 1);
            this.photos = novasFotos;
            this.message = res.mensagem;
        })
    }, (error) => {
        this.message = 'Foto removida com sucesso';
    });
  }
}
