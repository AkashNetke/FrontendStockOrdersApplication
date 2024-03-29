import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TradeDetailServiceService } from '../services/trade-detail-service.service';
import { Tradedetails } from '../tradedetails';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-trade',
  templateUrl: './update-trade.component.html',
  styleUrl: './update-trade.component.css'
})
export class UpdateTradeComponent {

  id:number=0;
  update:Tradedetails= new Tradedetails();

constructor(private _service:TradeDetailServiceService,private _route:Router,private _router:ActivatedRoute){}


ngOnInit() {
  this.update = new Tradedetails();

  this. id = this._router.snapshot.params['id'];
  
  
  this._service.getTradeById(this.id).subscribe((data)=>{
    console.log(data);
    this.update=data;
  })
        
}

submit(){

  this.updateTrade();
    
}

updateTrade(){
  this._service.updateTrade(this.update).subscribe((data)=>{
    console.log(data);
    this.update=new Tradedetails();
    this.gotoList();
  });
}

gotoList(){
  
  this._route.navigate(['showall']);
}

}
