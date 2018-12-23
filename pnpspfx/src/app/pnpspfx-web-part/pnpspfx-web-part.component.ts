import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {BaseService} from '../services/app.services';
import {Observable} from 'rxjs';

export interface ISPList{
  ID: string;
  Title: string;
  Url: string;
  Bane: string;
}

@Component({
  selector: 'app-pnpspfx-web-part',
  templateUrl: './pnpspfx-web-part.component.html',
  styleUrls: ['./pnpspfx-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PnpspfxWebPartComponent implements OnInit {
  @Input() description: string;

  constructor(private baseSrv:BaseService) { }

  ngOnInit() {
  }

  private getlistData(): Observable<ISPList>{
    var itms;
    this.baseSrv.getlistData_().then((data)=>{
      itms = data;
    });
    return itms;
  }

  private _getlistData(){
    var promise = new Promise((resolve, reject) => {
      this.baseSrv.getlistData().then((data:any)=>{
        if(data!==null&&data!==undefined){
          resolve(data);
        }
        else{
          reject('error')
        }
      });
    });
   return promise;
  }
}
