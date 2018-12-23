import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pnpspfx-web-part',
  templateUrl: './pnpspfx-web-part.component.html',
  styleUrls: ['./pnpspfx-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PnpspfxWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
