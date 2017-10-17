import { Photo } from "./photo/photo";
import { PhotoService } from "./photo/photo.service";
import { Component, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app",
  template: `
    <div class="jumbotron">
        <h1 class="text-center">
            Alurapic
        </h1>
    </div>
    <div class="container">
        <photo *ngFor="let photo of photos" url="{{photo.url}}" title="{{photo.titulo}}"></photo>
    </div>
    `
})
export class AppComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().then(photos => this.photos = photos);
  }
}
