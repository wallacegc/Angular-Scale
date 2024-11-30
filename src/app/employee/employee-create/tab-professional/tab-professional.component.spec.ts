import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProfessionalComponent } from './tab-professional.component';

describe('TabProfessionalComponent', () => {
  let component: TabProfessionalComponent;
  let fixture: ComponentFixture<TabProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabProfessionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
