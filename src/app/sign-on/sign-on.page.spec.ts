import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignOnPage } from './sign-on.page';

describe('SignOnPage', () => {
  let component: SignOnPage;
  let fixture: ComponentFixture<SignOnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignOnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignOnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
