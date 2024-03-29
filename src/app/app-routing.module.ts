import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowalltradesComponent } from './showalltrades/showalltrades.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { TradedetailsComponent } from './tradedetails/tradedetails.component';
import { UpdateTradeComponent } from './update-trade/update-trade.component';
import { ShowonedetailComponent } from './showonedetail/showonedetail.component';

const routes: Routes = [
{
  path:'showall',
  component:ShowalltradesComponent
},
{
  path:'create',
  component:CreateorderComponent
},
{
  path:'details',
  component:TradedetailsComponent
},
{
  path:'update/:id',
  component:UpdateTradeComponent
},
{
  path:'onedetail/:id',
  component:ShowonedetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
