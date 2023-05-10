import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchKey:string='';

  search(event:any){
    console.log(event.target.value)
      this.searchKey=event.target.value
      console.log(this.searchKey);
      
    }
  

}
