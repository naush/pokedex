import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'pokemon-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {
  @Output() queryChange = new EventEmitter<string>;
  // LO: Reactive Forms
  query = new FormControl();

  ngOnInit() {
    // LO: RxJS Operators
    this.query
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe((q: any) => this.queryChange.emit(q));
  }
}
