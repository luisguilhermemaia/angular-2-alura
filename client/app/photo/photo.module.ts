import { PhotoComponent } from './photo.component';
import { PhotoService } from './photo.service';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [PhotoComponent],
    exports: [PhotoComponent],
    providers: [PhotoService]
})
export class PhotoModule {}