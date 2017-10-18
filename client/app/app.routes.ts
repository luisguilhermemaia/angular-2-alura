import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListagemComponent } from "./listagem/listagem.component";

const appRoutes: Routes = [
  { path: "cadastro", component: CadastroComponent },
  { path: "cadastro/:id", component: CadastroComponent },
  { path: "", component: ListagemComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

export const routing = RouterModule.forRoot(appRoutes);
