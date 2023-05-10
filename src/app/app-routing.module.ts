import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [

  {
    path:'',redirectTo:'product/admin',pathMatch:'full'
  },
  {
    path:'product/admin',component: ProductManagerComponent 
  },
  {
    path:'product/add',component:AddProductComponent

  },
  {
    path:'product/update/:Id',component:UpdateProductComponent
  },
  {
    path:'product/view/:prod_Id',component:ViewProductComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
