import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Curso } from "./curso";
import { CursoService } from "./curso.service";

@Component({
    templateUrl:'./cursoinfo.component.html'
})
export class CursoInfoComponent implements OnInit{

    curso!: Curso;

    constructor(private routeActived: ActivatedRoute, private cursoService: CursoService){

    }

    ngOnInit(): void {       
        this.curso = this.cursoService.retrieveByName(this.routeActived.snapshot.paramMap.get('nome')!);
    }

    salvar():void{
        this.cursoService.save(this.curso);
    }
}