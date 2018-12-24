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
  //lstItems: any[] = [];
  lstItems1: Array<any> = [];
  lstItems2: Array<any> = [];
  //lstItems = [];
  public test: string = "test string....";
  topics: string[] = ['C','C#','Angular','Angular Element'];
  constructor(private baseSrv:BaseService) { }

  ngOnInit() {
  }

  private getlistData1(){
    var promise = new Promise((resolve, reject) => {
      this.baseSrv.getlistData1().then((data:any)=>{
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

  private getlistData2(): Observable<ISPList>{
    var itms;
    this.baseSrv.getlistData2().then((data)=>{
      itms = data;
    });
    return itms;
  }
}
