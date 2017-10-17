import { FiltroPortitulo } from './photo.pipes';
import { PhotoComponent } from './photo.component';
import { PhotoService } from './photo.service';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [PhotoComponent, FiltroPortitulo],
    exports: [PhotoComponent, FiltroPortitulo],
    providers: [PhotoService]
})
export class PhotoModule {}