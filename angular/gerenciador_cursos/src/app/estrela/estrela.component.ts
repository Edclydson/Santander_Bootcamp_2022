import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-estrela',
    templateUrl: './estrela.component.html',
    styleUrls: ['./estrela.component.css']

})
export class EstrelaComponente implements OnChanges{
    
    @Input()
    nota: number = 0;

    tamanhoNota: number = 0;

    ngOnChanges(): void{
        this.tamanhoNota = this.nota * 74 / 5;
    }
}