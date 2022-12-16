import { Component, OnInit, Input } from '@angular/core';
import { range, subtract, compose, converge, identity, gte, __ } from 'ramda';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() value: number;

  get filledStars(): number[] {
    return compose(
      range(0),
      Math.floor
    )(this.value || 0);
  }

  get hasHalfStar(): boolean {
    return compose(
      gte(__, 0.5),
      converge(subtract, [identity, Math.floor]),
    )(this.value || 0);
  }

  get emptyStars(): number[] {
    return compose(
      range(0),
      subtract(5),
      Math.ceil
    )(this.value || 0);
  }
}
