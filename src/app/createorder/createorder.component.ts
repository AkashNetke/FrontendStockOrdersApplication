import { Component } from '@angular/core';
import { CreateOrder } from '../create-order';
import { TradeDetailServiceService } from '../services/trade-detail-service.service';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrl: './createorder.component.css'
})
export class CreateorderComponent {

  orderList:CreateOrder[]=[];

  constructor(private _service:TradeDetailServiceService){}

  ngOnInit(){

    this.getAllOrders();

  }

  getAllOrders(){
    this._service.getAllOrders().subscribe(  orderDetail=>this.orderList=orderDetail  
       
      );
  }



}
