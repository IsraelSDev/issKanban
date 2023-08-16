import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() options: string[] = ["Todo", "Doing", "Done"];
  @Input() name: string = '';

  public optionSelected: string = 'Todo';

  @Output() selected: EventEmitter<string> = new EventEmitter<string>()


  handleSelectOptions(option: string): void {
    this.selected.emit(option)
  }

}
