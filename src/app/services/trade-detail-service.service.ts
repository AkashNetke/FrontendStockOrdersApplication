import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tradedetails } from '../tradedetails';
import { Observable } from 'rxjs';
import { CreateOrder } from '../create-order';

@Injectable({
  providedIn: 'root'
})
export class TradeDetailServiceService {

  constructor(private http:HttpClient) { }

  public  tradeDetailsFromUser(TradeParameters:Tradedetails):Observable<any>{
    console.log(Tradedetails);
    return this.http.post(`http://localhost:8085/saveTradeDetails`,TradeParameters);
  }

  public getAllTrades():Observable<Tradedetails[]>{
    return this.http.get<Tradedetails[]>(`http://localhost:8085/getAllDetails`);
  }

  public deleteTradeById(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8085/del/${id}`);
  }

  public getTradeById(id:number):Observable<any>{
    return this.http.get(`http://localhost:8085/get/${id}`);
  }

  public updateTrade(update:Tradedetails):Observable<any>{
    return this.http.put(`http://localhost:8085/update`,update);
  }

  public saveOrder(order:CreateOrder):Observable<any>{
    return this.http.post(`http://localhost:8085/saveOrder`,order);
  }

  public getAllOrders():Observable<CreateOrder[]>{
    return this.http.get<CreateOrder[]>(`http://localhost:8085/getOrders`);
  }
}
