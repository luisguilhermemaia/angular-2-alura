import { Pipe, PipeTransform } from '@angular/core';
import { PhotoComponent } from './photo.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPortitulo implements PipeTransform{
    transform(fotos: PhotoComponent[], digitado: string){
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase()));
    }
}