import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { PhotoModule } from './photo/photo.module';

@NgModule({
  imports: [BrowserModule, HttpModule, PhotoModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
