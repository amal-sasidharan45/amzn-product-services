import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProduct } from 'src/model/myProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseUrl:string='https://product-services-amal-m.onrender.com/products'
  getAllproducts():Observable<MyProduct>{
    return this.http.get(this.baseUrl)
    
  }

viewProduct(prod_Id:any){
  return this.http.get(`${this.baseUrl}/${prod_Id}`)
}
getGroupname(groupId:any){
  return this.http.get('https://product-services-amal-m.onrender.com/group/'+groupId)
}

getAllgroups(){
  return this.http.get('https://product-services-amal-m.onrender.com/group')
}
addproduct(productBody:any){
  return this.http.post(this.baseUrl,productBody)
}
deleteProduct(prod_Id:any){
  return this.http.delete(`${this.baseUrl}/${prod_Id}`)

}
updateProduct(prod_Id:any,productBody:any){
  return this.http.put(`${this.baseUrl}/${prod_Id}`,productBody)
}
}
