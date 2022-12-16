import { flip, uncurryN } from 'ramda';

export const reduceAction = <A, B, C>(fn: (_: A) => (_: B) => C) => flip(uncurryN(2, fn));