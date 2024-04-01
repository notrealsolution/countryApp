import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';
  @Output()
  public onValue: EventEmitter< string > = new EventEmitter <string> ();


  onSearch(value: string):void {
    if ( !value ) return;
    this.onValue.emit( value );
  }
}
