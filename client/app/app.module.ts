import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";

import { PhotoModule } from './photo/photo.module';
import { PainelModule } from './painel/painel.module';

import 'rxjs/add/operator/map';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {routing} from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, HttpModule, PhotoModule, PainelModule, routing, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, CadastroComponent, ListagemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
