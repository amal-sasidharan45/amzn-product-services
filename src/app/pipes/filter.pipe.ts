import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:any=[],searchKey:string,propName:string): any[] {
    const result :any=[]
    if(!allproducts || searchKey=='' ||propName==''){
      return allproducts
    }
    //search
    allproducts.forEach((product:any)=>{
      if(product[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(product)
      }
    })
    return result;
  }


}
