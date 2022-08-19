import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform{
    transform(valor: string, char: string, valorsubstituir: string) {
        return valor.replace(char,valorsubstituir);
    }
}