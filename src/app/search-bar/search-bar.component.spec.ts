import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // LO: [Testing] RxJS Operators
  describe('#queryChange', () => {
    it('emits query change events', fakeAsync(() => {
      spyOn(component.queryChange, 'emit');
      const query = 'pika';

      component.query.setValue(query);
      tick(SearchBarComponent.DEBOUNCE_TIME);

      expect(component.queryChange.emit).toHaveBeenCalledWith(query);
    }));

    it('debounces query change events', fakeAsync(() => {
      spyOn(component.queryChange, 'emit');

      component.query.setValue('p');
      component.query.setValue('pi');
      tick(SearchBarComponent.DEBOUNCE_TIME);

      expect(component.queryChange.emit).toHaveBeenCalledTimes(1);
    }));

    it('does not trigger change events if query remains the same', fakeAsync(() => {
      spyOn(component.queryChange, 'emit');

      component.query.setValue('p');
      tick(SearchBarComponent.DEBOUNCE_TIME);

      component.query.setValue('p');
      tick(SearchBarComponent.DEBOUNCE_TIME);

      expect(component.queryChange.emit).toHaveBeenCalledTimes(1);
    }));
  });
});
