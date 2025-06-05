import { SortOffersType } from '../const';

type SortOffer = typeof SortOffersType[keyof typeof SortOffersType];

export { SortOffer };