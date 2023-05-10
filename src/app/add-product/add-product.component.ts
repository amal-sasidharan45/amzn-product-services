import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyProduct } from 'src/model/myProduct';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  implements OnInit{
allgroups:any[]=[]

product:MyProduct={}
  constructor( private api:ApiService,private route:Router){}
  ngOnInit():void{

this.api.getAllgroups().subscribe((data:any)=>{
console.log(data);
this.allgroups=data

})
  }
  addproduct(){
    
    this.api.addproduct(this.product).subscribe((data:any)=>{
      alert(`${this.product.product_name} added`)
      this.route.navigateByUrl('')
    })
  }

}
