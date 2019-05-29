import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal'; // npm i ngx-bootstrap
import { ReactiveFormsModule } from '@angular/forms'; // this makes FormBuilder work
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SelectImageComponent } from './components/select-image/select-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SelectImageComponent]
})
export class AppModule { }
