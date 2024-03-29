import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {


  status : boolean = false;

  getStatus(): boolean{
    return this.status;
  }

  setStatus(value:boolean):void{
    this.status = value;
  }

  constructor() { }
}
