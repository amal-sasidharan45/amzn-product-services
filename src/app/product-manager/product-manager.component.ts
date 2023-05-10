import { Component } from '@angular/core';
import { MyProduct } from 'src/model/myProduct';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent {
  searchKey:string='';


  allproducts:MyProduct[]=[]
  loginDate: any;


constructor (private api:ApiService){
  this.loginDate=new Date()
}
  ngOnInit():void{
  this.getAllproducts()

  }
  getAllproducts(){
    this.api.getAllproducts().subscribe((data:any)=>{
      console.log(data);
      this.allproducts=data
      
    })

  }
  search(event:any){
  console.log(event.target.value)
    this.searchKey=event.target.value
    console.log(this.searchKey);
    
  }

  deleteProduct(prod_Id:any){
   if(confirm("Are you sure?")){
    this.api.deleteProduct(prod_Id).subscribe((data:any)=>{
   
      alert(`product deleted`)
      this.getAllproducts()
    })
  }

   }
  

}
