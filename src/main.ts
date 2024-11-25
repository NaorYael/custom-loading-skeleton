import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LoadingSkeletonComponent } from '../loading-skeleton/loading-skeleton.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="isLoading; else content">
      <app-loading-skeleton></app-loading-skeleton>
      <hr>
      <app-loading-skeleton [rows]="5" [disabledHeader]="true"></app-loading-skeleton>
    </div>
    <ng-template #content>
      <div>Your actual content goes here</div>
</ng-template>
  `,
  standalone: true,
  imports: [LoadingSkeletonComponent, NgIf],
})
export class App {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Simulate a 3-second load time
  }
}

bootstrapApplication(App);
