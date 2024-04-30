import { PipeTransform } from "@angular/core";

@Pipe({
    name: 'capitalize'
  })
  export class CapitalizePipe implements PipeTransform {
    transform(value: string): string {
      if (!value) return '';
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

function Pipe(arg0: { name: string; }): (target: typeof CapitalizePipe) => void | typeof CapitalizePipe {
    throw new Error("Function not implemented.");
}
  