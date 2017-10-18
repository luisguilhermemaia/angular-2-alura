import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Photo } from "../photo/Photo";
import { PhotoService } from "../photo/photo.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "cadastro",
  template: `
    <div class="container">
    <h1 class="text-center">{{photo.titulo}}</h1>
        <p *ngIf="message.length" class="alert alert-info">
            {{message}}
        </p>    
        <form [formGroup]="meuForm" class="row" (submit)="send($event)">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Título</label>
                    <input 
                        name="titulo" 
                        required
                        formControlName="titulo"
                        [(ngModel)]="photo.titulo" 
                        class="form-control"  
                        autocomplete="off">
                    <div *ngIf="meuForm.controls.titulo.invalid">
                        <span *ngIf="meuForm.controls.titulo.errors.required" class="form-control alert-danger">
                            Título Obrigatório
                        </span>
                        <span *ngIf="meuForm.controls.titulo.errors.minlength" class="form-control alert-danger">
                            Deve ter no mínimo 4 caracteres
                        </span>
                    </div>    
                </div>
                <div class="form-group">
                    <label>URL</label>
                    <input 
                        required    
                        name="url" 
                        formControlName="url"
                        [(ngModel)]="photo.url" 
                        class="form-control"  
                        autocomplete="off">
                    <span *ngIf="meuForm.controls.url.invalid" class="form-control alert-danger">
                        URL Obrigatória
                    </span>
                </div>
                <div class="form-group">
                    <label>Descrição</label>
                    <textarea 
                        formControlName="descricao"
                        name="descricao" 
                        [(ngModel)]="photo.descricao" 
                        class="form-control"  
                        autocomplete="off">
                    </textarea>
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="meuForm.invalid">
                    Salvar
                </button>
                <a [routerLink]="['']" class="btn btn-primary">Voltar</a>
                <hr>
            </div>
            <div class="col-md-6">
              <photo url="{{photo.url}}" titulo="{{photo.titulo}}"></photo>  
            </div>
        </form>
    </div>
    `
})
export class CadastroComponent implements OnInit {
  photo: Photo;
  meuForm: FormGroup;
  route: ActivatedRoute;
  send: any;
  message: string = '';

  constructor(
    private photoService: PhotoService,
    private location: Location,
    fb: FormBuilder,
    route: ActivatedRoute
  ) {
    this.route = route;

    this.route.params.subscribe(params => {
      let id = params["id"];
      if (id) {
        this.photoService.getPhoto(id).subscribe(photo => (this.photo = photo));
      }
    });

    this.meuForm = fb.group({
      titulo: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      url: ["", Validators.required],
      descricao: [""]
    });
  }

  ngOnInit(): void {
      this.photo = new Photo();
    if (this.route.params) {
      this.send = this.alterar;
    } else {
      this.send = this.cadastrar;
    }
  }

  cadastrar(event) {
    event.preventDefault();
    this.photoService.create(this.photo).subscribe(id => {
      this.photo = new Photo();
    }, console.error);
  }

  alterar(event) {
    event.preventDefault();
    this.photoService.update(this.photo).subscribe(() => {
      this.goBack();
    }, console.error);
  }

  goBack(): void {
    this.location.back();
  }
}
