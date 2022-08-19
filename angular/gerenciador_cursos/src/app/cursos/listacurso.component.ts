import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";
import { CursoService } from "./curso.service";

@Component({
    templateUrl: "./listacurso.component.html"
})
export class ListaCursoComponent implements OnInit{
    _cursos: Curso[] = [];
    _cursosfiltrados: Curso[] = [];
    _filterBy: string = "";
    constructor (private service: CursoService){

    }

    ngOnInit(): void{
        this._cursos = this.service.retrieveAll();
        this._cursosfiltrados = this._cursos;
    }

    set filter(value: string){
        this._filterBy = value;
        this._cursosfiltrados = this._cursos.filter((curso: Curso) => curso.nome.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

}