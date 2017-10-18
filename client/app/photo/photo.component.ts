import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "photo",
  template: `<img class="img-responsive center-block efeito" src="{{url}}" alt="{{title}}">`,
  styles: [
    `
      .efeito:hover {
        transition: all 0.5s;
        transform: scale(1.15);
      }
      .efeito {
        transition: all 1s;    
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class PhotoComponent {
    @Input() url: string;
    @Input() titulo: string;
    descricao: string
}
