import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit{

  private debouncer: Subject<string> = new Subject<string>;

  @Input()
  public placeholder: string = '';
  @Output()
  public onValue: EventEmitter< string > = new EventEmitter <string> ();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onValue.emit( value );
    });
  }


  onKeyPress(value: string):void {
    this.debouncer.next( value );
    //this.onValue.emit( value );
  }
}
