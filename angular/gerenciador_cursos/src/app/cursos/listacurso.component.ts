import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";

@Component({
    selector: "app-listacurso",
    templateUrl: "./listacurso.component.html"
})
export class ListaCursoComponent implements OnInit{
    cursos: Curso[] = [];

    ngOnInit(): void{
        this.cursos = [
            {
                id: 1,
                nome: 'Angular',
                imageUrl: '',
                preco: 99.99,
                codigo: 'XPS-4451',
                duracao: 120,
                avaliacao: 4.5
            },
            {
                id: 2,
                nome: 'Angular Forms',
                imageUrl: 'assets/images/forms.png',
                preco: 50,
                codigo: 'XPS-3450',
                duracao: 80,
                avaliacao: 4.2
            },
            {
                id: 3,
                nome: 'Angular Http',
                imageUrl: 'assets/images/http.png',
                preco: 45.90,
                codigo: 'XPS-1094',
                duracao: 60,
                avaliacao: 4.4
            }
    ]
    }

}