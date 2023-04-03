import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiWorkShopComponent } from './api-work-shop.component';

describe('ApiWorkShopComponent', () => {
  let component: ApiWorkShopComponent;
  let fixture: ComponentFixture<ApiWorkShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiWorkShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiWorkShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
