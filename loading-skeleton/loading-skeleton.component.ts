import { JsonPipe, NgClass, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-loading-skeleton',
  standalone: true,
  imports: [JsonPipe, NgClass, NgFor],
  templateUrl: './loading-skeleton.component.html',
  styleUrls: ['./loading-skeleton.component.scss']
})
export class LoadingSkeletonComponent {
  @Input() rows: number = 3;
  @Input() disabledHeader: boolean = false;

  // Create an array of numbers to loop through in the template
  get rowArray(): number[] {
    return Array.from({ length: this.rows }, (_, index) => index);
  }
}
