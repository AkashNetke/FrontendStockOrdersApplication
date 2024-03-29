import { Component } from '@angular/core';
import { Tradedetails } from '../tradedetails';
import { TradeDetailServiceService } from '../services/trade-detail-service.service';

@Component({
  selector: 'app-tradedetails',
  templateUrl: './tradedetails.component.html',
  styleUrl: './tradedetails.component.css'
})
export class TradedetailsComponent {

    TradeDetails = new Tradedetails();
    date: any;
    successMessage:boolean=false;

    constructor(private service:TradeDetailServiceService){}

  submit(){

    this.service.tradeDetailsFromUser(this.TradeDetails).subscribe(
      response => {
        this.successMessage = true;
        console.log('Data saved successfully:', response);
      },
      error => {
        console.error('Error saving data:', error);
      }
    );
     

  }
}
