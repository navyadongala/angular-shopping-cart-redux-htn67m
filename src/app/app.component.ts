import { Component, OnInit, HostBinding, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectThemeName } from './state';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  @HostBinding('class') klass: string = '';

  themeSub: Subscription;

  constructor(private store: Store<AppState>, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.themeSub = this.store.pipe(
      select(selectThemeName),
      map(name => `${name}-theme`)
    ).subscribe(klass => {
      this.klass = klass;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    if (this.themeSub && !this.themeSub.closed) {
      this.themeSub.unsubscribe();
    }
  }
}
