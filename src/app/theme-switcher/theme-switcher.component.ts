import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectIsDarkTheme } from '../state';
import { setLightTheme, setDarkTheme } from '../actions/theme.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  isDarkTheme$: Observable<boolean>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.isDarkTheme$ = this.store.pipe(select(selectIsDarkTheme));
  }

  setLightTheme(ev: Event): void {
    ev.preventDefault();
    this.store.dispatch(setLightTheme());
  }
  
  setDarkTheme(ev: Event): void {
    ev.preventDefault();
    this.store.dispatch(setDarkTheme());
  }

}