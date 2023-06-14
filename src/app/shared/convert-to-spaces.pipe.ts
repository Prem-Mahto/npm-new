import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'convertToSpaces'
})
export class SpacePipe implements PipeTransform{
    transform(value: string, character: string):string {
       return value.replaceAll(character,' ');
    }

}