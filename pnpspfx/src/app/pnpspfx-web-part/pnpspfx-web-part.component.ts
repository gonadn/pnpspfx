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
  public test1: string = "ListItems 1";
  public test2: string = "ListItems 2";

  topics: string[] = ['C','C#','Angular','Angular Element'];
  constructor(private baseSrv:BaseService) { }

  ngOnInit() {
    this.getlistData1();
    this.getlistData2();
  }

 
  private getlistData1() {
    console.log("Get List Data 1");
    this.baseSrv.getlistData1().then((data: any) => {
      if (data !== null && data !== undefined) {
        console.log(data);
        this.lstItems1 = data;
      }
    });
  }

  private getlistData2(): void {
    console.log("Get List Data 2");
    var itms;
    this.baseSrv.getlistData2().then((data) => {
      itms = data;
    });
    this.lstItems2 = itms;
  }

}
