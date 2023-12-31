import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {


  @Input() titleColumn: string = 'Title';
  @Input() tasks: [] = []
  @Input() color: string = 'fff'
}
