import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradedetailsComponent } from './tradedetails/tradedetails.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShowalltradesComponent } from './showalltrades/showalltrades.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { CreateorderComponent } from './createorder/createorder.component';
import { UpdateTradeComponent } from './update-trade/update-trade.component';
import { ShowonedetailComponent } from './showonedetail/showonedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    TradedetailsComponent,
    HeaderComponent,
    ShowalltradesComponent,
    CreateorderComponent,
    UpdateTradeComponent,
    ShowonedetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   HttpClientModule,
   NgIf,
   RouterLinkActive,
   RouterModule,
   NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
