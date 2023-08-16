import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() title: string = '';
  @Input() type: string = 'primary-l';
  @Input() iconId: number = 0;
  @Input() disabled: boolean = false;
  @Input() w: number = 174;

}
