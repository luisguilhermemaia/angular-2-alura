import { $$ } from '@angular/compiler/src/chars';
import { Component, Input, OnInit, ElementRef } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "painel",
  template: `
    <div class="panel panel-default efeito">
        <div class="panel-heading">
            <h3 class="panel-title text-center">
            {{ titulo }}
            </h3>
        </div>
        <div class="panel-body">
            <ng-content></ng-content>
        </div>
    </div>
    `,
    styles: [
        `
        .efeito {
            box-shadow: 2px 2px 15px;
        }
        `
    ]
})
export class PainelComponent implements OnInit {
  @Input() titulo: string;

  constructor(private elemento: ElementRef){

  }

  ngOnInit(): void {
    this.titulo =
      this.titulo.length > 7 ? this.titulo.substr(0, 7) + "..." : this.titulo;
  }

  fadeOut(cb) {
      $(this.elemento).fadeOut(cb);
  }
}
