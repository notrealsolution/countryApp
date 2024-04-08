import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>;
  private debouncerSuscrition?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue: EventEmitter< string > = new EventEmitter <string> ();

  ngOnInit(): void {
    this.debouncerSuscrition = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onValue.emit( value );
    });
  }
  ngOnDestroy(): void {
    this.debouncerSuscrition?.unsubscribe();
  }


  onKeyPress(value: string):void {
    this.debouncer.next( value );
    //this.onValue.emit( value );
  }
}
