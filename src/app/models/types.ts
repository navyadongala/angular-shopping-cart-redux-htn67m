export interface Product {
  id?: UUID;
  name?: Name;
  images?: Images;
  price?: Price;
  rating?: Rating;
}

export interface Images {
  thumbnail?: ImageUrl;
  medium?: ImageUrl;
  large?: ImageUrl;
}

export type UUID = string;
export type Name = string;
export type ImageUrl = string;
export type Price = number;
export type Rating = number;

export type ShoppingCart = Product[];