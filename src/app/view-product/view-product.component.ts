import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{

prod_Id:string=''
product:any
groupId:any
groupName:any
constructor(private activatedRoute:ActivatedRoute,private api:ApiService){}
ngOnInit(): void {
  this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data);
    this.prod_Id=data.prod_Id
//api call
    this.api.viewProduct(this.prod_Id).subscribe((data:any)=>{
     console.log(data)
     this.product=data
     this.groupId=data.groupId


     this.api.getGroupname(this.groupId).subscribe((data:any)=>{
      this.groupName=data.name
    })



    })
    
  })
}





}
