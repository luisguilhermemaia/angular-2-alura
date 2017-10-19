import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
  moduleId: module.id,
  selector: "botao",
  template: `
  <button 
    (click)="executaAcao()" 
    class="btn {{estilo}}" 
    [type]="tipo" 
    [disabled]="desabilitado">
        {{nome}}
  </button>`
})
export class BotaoComponent {
  @Input() nome: string = "Ok";
  @Input() estilo: string = "btn-default";
  @Input() tipo: string = "button";
  @Input() desabilitado: boolean = false;
  @Input() confirmacao: boolean = false;
  @Output() acao = new EventEmitter();

  executaAcao() {
    if (this.confirmacao) {
      if (confirm("deseja excluir?")) {
        this.acao.emit(null);
      }
      return;
    } else {
      this.acao.emit(null);
    }
  }
}
