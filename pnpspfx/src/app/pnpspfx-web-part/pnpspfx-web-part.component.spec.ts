import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnpspfxWebPartComponent } from './pnpspfx-web-part.component';

describe('PnpspfxWebPartComponent', () => {
  let component: PnpspfxWebPartComponent;
  let fixture: ComponentFixture<PnpspfxWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnpspfxWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnpspfxWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
