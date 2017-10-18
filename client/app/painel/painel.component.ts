import { Component, Input, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "painel",
  template: `
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title text-center">
            {{ titulo }}
            </h3>
        </div>
        <div class="panel-body">
            <ng-content></ng-content>
        </div>
    </div>
    `
})
export class PainelComponent implements OnInit {
  @Input() titulo: string;

  ngOnInit(): void {
    this.titulo =
      this.titulo.length > 7 ? this.titulo.substr(0, 7) + "..." : this.titulo;
  }
}
