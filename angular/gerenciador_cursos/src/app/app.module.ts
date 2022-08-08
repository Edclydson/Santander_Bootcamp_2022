import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaCursoComponent } from './cursos/listacurso.component';
import { EstrelaComponente } from './estrela/estrela.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursoComponent,
    EstrelaComponente
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
