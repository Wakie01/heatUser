import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerServerPage } from './customer-server.page';

describe('CustomerServerPage', () => {
  let component: CustomerServerPage;
  let fixture: ComponentFixture<CustomerServerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerServerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerServerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
