import { Validation, Success, Fail, NEL } from 'monet';
import { UUID, Name, ImageUrl, Price, Rating, Product } from './types';
import { idLens } from './optics';
import { compose, equals, view} from 'ramda';
import { uuid, Random } from 'fast-check';

export const productId = (seed: number) => uuid().generate(new Random(seed)).value;

export const NameApply = (name: string): Validation<NEL<string>, Name> =>
  name.length > 0 && name.length <= 60
    ? Success(name)
    : Fail(NEL('Product name length must be greater than 0 and less than 60'));

export const ImageUrlApply = (url: string): Validation<NEL<string>, ImageUrl> =>
  /\.(jpeg|jpg|gif|png)$/.test(url) ? Success(url) : Fail(NEL('Invalid image url'));

export const PriceApply = (value: number): Validation<NEL<string>, Price> =>
  value > 0 ? Success(value) : Fail(NEL('Price must be a positive number'));

export const RatingApply = (value: number): Validation<NEL<string>, Rating> =>
  value >= 0 && value <= 5 ? Success(value) : Fail(NEL('Rating must be a value between 0 and 5'));

export const ProductApply = (name: string) => (url: string) => (price: number) => (rating: number) => {
  const apply = (validRating: Rating) => (validPrice: Price) => (validImageUrl: ImageUrl) => (validName: Name) =>
    ({
      id: productId(Date.now()),
      name: validName,
      imageUrl: validImageUrl,
      price: validPrice,
      rating: validRating
    } as Product);
  return NameApply(name).ap(ImageUrlApply(url).ap(PriceApply(price).ap(RatingApply(rating).map(apply))));
};


export const matchesProduct = (id: UUID) => compose(equals(id), view(idLens))