import { Component } from '@angular/core';
import { Tradedetails } from '../tradedetails';
import { TradeDetailServiceService } from '../services/trade-detail-service.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { StatusService } from '../services/status.service';

@Component({
  selector: 'app-showalltrades',
  templateUrl: './showalltrades.component.html',
  styleUrl: './showalltrades.component.css'
})
export class ShowalltradesComponent {
  tradeDetailsList: Tradedetails[]=[];


constructor(private _service:TradeDetailServiceService,private _route:Router,private _status:StatusService){}


ngOnInit(){

  this.getAllTrades();

}

getAllTrades(){
  this._service.getAllTrades().subscribe(tradeDetails => this.tradeDetailsList = tradeDetails);

}

deleteTrade(id:number){
  this._service.deleteTradeById(id).subscribe((data)=>{
    console.log(data);
    this.getAllTrades();

  });
}

getTradeById(id:number){

this._route.navigate(['update',id])

}

getOneDetail(id:number){
  this._route.navigate(['onedetail',id])

}



}
