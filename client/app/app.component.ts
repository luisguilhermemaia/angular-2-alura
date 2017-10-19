import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app",
  template: `
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <a [routerLink]="['']" class="navbar-brand">AluraPic</a>
        <a [routerLink]="['/cadastro']" class="navbar-brand">Nova foto</a>
      </div>
    </div><!-- /.container-fluid -->
  </nav>  
  
  <router-outlet></router-outlet>
  `
})
export class AppComponent  {}
