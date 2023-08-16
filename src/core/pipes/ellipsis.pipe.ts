import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'ellipsis'
})

export class EllipsisPipe implements PipeTransform {
  transform(text: string, size: number = 15): any {
    if (text.length > size) {
      return text.slice(0, size) + '...'
    } else {
      return text
    }
  }
}
