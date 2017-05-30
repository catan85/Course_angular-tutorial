import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {

    if (value.length === 0)
    {
      return value;
    }

    const sortedValues = value.sort((a,b)=>{
      console.log(a[propName] + '>' + b[propName]+ '?');
      return a[propName] > b[propName]? 1 : -1;
    });

    return sortedValues;

  }

}
