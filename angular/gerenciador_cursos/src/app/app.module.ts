import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaCursoComponent } from './cursos/listacurso.component';
import { EstrelaComponente } from './estrela/estrela.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Erro404Component } from './erro-404/erro404.component';
import { CursoInfoComponent } from './cursos/cursoinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursoComponent,
    EstrelaComponente,
    ReplacePipe,
    NavBarComponent,
    Erro404Component,
    CursoInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'cursos', component: ListaCursoComponent
      },
      {
        path: 'cursos/info/:nome', component: CursoInfoComponent
      },
      {
        path:'', redirectTo:'cursos',pathMatch:'full'
      },
      {
        path:'**', component: Erro404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
