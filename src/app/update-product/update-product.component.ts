import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { myGroup } from 'src/model/myGroup';
import { MyProduct } from 'src/model/myProduct';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit  {
  prod_Id:string='';
  product:MyProduct={}
  groups:myGroup[]=[]
    constructor (private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){}
  
  
    ngOnInit(): void {
      this.activatedRoute.params.subscribe((data:any)=>{
        console.log(data.Id);
        this.prod_Id=data.Id
  
        //call a api for getting particular product details
        this.api.viewProduct(this.prod_Id).subscribe((data:any)=>{
          console.log(data);//particular contact details
          this.product=data
                //call a api for getting all group details\
                this.api.getAllgroups().subscribe((data:any)=>{
                  console.log(data);
                  this.groups=data
                  
                })
  
        })
    })
  }
  updateProduct(){
    this.api.updateProduct(this.prod_Id,this.product).subscribe((data:any)=>{
      alert(`${this.product.product_name} updated`)
      this.route.navigateByUrl('')
    })
  
  }

}
