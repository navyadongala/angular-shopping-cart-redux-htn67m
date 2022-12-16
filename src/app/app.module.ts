import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './reducers/cart.reducer';
import { themeReducer } from './reducers/theme.reducer';

import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { RatingComponent } from './rating/rating.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddedToCartPipe } from './pipes/added-to-cart.pipe';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ shoppingCart: cartReducer, theme: themeReducer }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  declarations: [AppComponent, ProductsComponent, RatingComponent, ShoppingCartComponent, AddedToCartPipe, ThemeSwitcherComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
