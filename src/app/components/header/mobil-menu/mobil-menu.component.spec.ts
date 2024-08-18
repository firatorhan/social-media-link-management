import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilMenuComponent } from './mobil-menu.component';

describe('MobilMenuComponent', () => {
  let component: MobilMenuComponent;
  let fixture: ComponentFixture<MobilMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
