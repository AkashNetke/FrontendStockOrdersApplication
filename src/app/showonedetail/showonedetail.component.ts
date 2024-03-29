import { Component } from '@angular/core';
import { Tradedetails } from '../tradedetails';
import { ActivatedRoute, Router } from '@angular/router';
import { TradeDetailServiceService } from '../services/trade-detail-service.service';
import { CreateOrder } from '../create-order';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-showonedetail',
  templateUrl: './showonedetail.component.html',
  styleUrl: './showonedetail.component.css'
})
export class ShowonedetailComponent {

  order:CreateOrder = new CreateOrder();

  id:number =0;

  getOneDetail:Tradedetails = new Tradedetails();

  constructor(private _route:Router,private _router:ActivatedRoute,private _service:TradeDetailServiceService, private _status:StatusService){}

  ngOnInit() {
    this.getOneDetail = new Tradedetails();
  
    this. id = this._router.snapshot.params['id'];
    
    
    this._service.getTradeById(this.id).subscribe((data)=>{
      console.log(data);
      this.getOneDetail=data;

      this.order.stockname = this.getOneDetail.stockname;
      this.order.listingprice = this.getOneDetail.listingprice;
      this.order.quantity = this.getOneDetail.quantity;
      this.order.type = this.getOneDetail.type;
      this.order.priceperunit = this.getOneDetail.priceperunit;
      this.order.datetime = this.getOneDetail.datetime;
    })
          
  }


  list(){
    this._route.navigate(['showall']);

  }

  getTradeById(id:number){

    this._route.navigate(['update',id])
    
    }

  deleteTrade(id:number){
      this._service.deleteTradeById(id).subscribe((data)=>{
        console.log(data);
       
    
      });
    }

    saveOrder(){


      this._service.saveOrder(this.order).subscribe(
        
        response=>{
          console.log("Data saved succesfully")
        },
        error=>{
          console.log("Exception occured")
        }
      );
      this._route.navigate(['create']);
      this._status.setStatus(true);
      this.deleteTrade(this.id);

    }

}
