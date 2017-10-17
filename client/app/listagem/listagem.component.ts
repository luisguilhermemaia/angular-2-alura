import { Component, OnInit } from '@angular/core';
import { PhotoService } from "../photo/photo.service";
import { Photo } from "../photo/photo";

@Component({
    selector: 'listagem',
    template: `
    <div class="jumbotron">
        <h1 class="text-center">
            Alurapic
        </h1>
    </div>
    <div class="container">
        <div class="row">
            <painel *ngFor="let photo of photos" titulo="{{photo.titulo}}" class="col-md-2">
                <photo url="{{photo.url}}" title="{{photo.titulo}}"></photo>
            </painel>
        </div>
    </div>
    `
})
export class ListagemComponent implements OnInit{
    photos: Photo[] = [];
    
      constructor(private photoService: PhotoService) {}
    
      ngOnInit(): void {
        this.photoService.getPhotos().subscribe(data => this.photos = data);
      }
}