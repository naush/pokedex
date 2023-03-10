import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'pokemon-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {
  // LO: [Angular] Component Output
  @Output() queryChange = new EventEmitter<string>;
  // LO: [Angular] Reactive Forms
  query = new FormControl();
  public static DEBOUNCE_TIME = 500;

  ngOnInit() {
    // LO: [RxJS] Observable & Operators
    this.query
      .valueChanges
      .pipe(
        debounceTime(SearchBarComponent.DEBOUNCE_TIME),
        distinctUntilChanged(),
      )
      .subscribe((q: any) => this.queryChange.emit(q));
  }
}
