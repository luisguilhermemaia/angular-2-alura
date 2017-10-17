import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "photo",
  template: `<img class="img-responsive center-block" [src]="url" [alt]="title">`
})
export class PhotoComponent {
    @Input() url: string;
    @Input() titulo: string;
    descricao: string
}
