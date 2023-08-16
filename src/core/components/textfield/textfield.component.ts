import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent {


  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;
  @Output() handleCampo: EventEmitter<any> = new EventEmitter()

  valorPreenchido: string = '';

  changeTextField(valorNovo: string): void {
    this.handleCampo.emit(valorNovo);
  }
}
