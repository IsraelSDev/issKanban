import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent {

  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;

}
