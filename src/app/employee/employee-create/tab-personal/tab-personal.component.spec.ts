import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPersonalComponent } from './tab-personal.component';

describe('TabPersonalComponent', () => {
  let component: TabPersonalComponent;
  let fixture: ComponentFixture<TabPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
