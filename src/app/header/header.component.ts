import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private _route:Router){}

  showTradeDetails(){
    this._route.navigate(['/showall']);

  }

  gotocreateorder(){
    this._route.navigate(['/create']);
  }

  gotoaddtrade(){
    this._route.navigate(['/details'])
  }

}
