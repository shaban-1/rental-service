export const AppRoute = {
	Main: '/',
	Login: '/login',
	Favorites: '/favorites',
	Offer: '/offer/:id',
	Profile: '/profile',
} as const;

export const AuthorizationStatus = {
	Auth: 'AUTH',
	NoAuth: 'NO_AUTH',
	Unknown: 'UNKNOWN',
} as const;

export const Setting = { RentalOffersCount: 312 } as const;

export const STARS_COUNT = 5;

export type OfferLocation = {
	latitude: number;
	longitude: number;
	zoom: number;
};

export type CityOffer = {
	name: string;
	location: OfferLocation;
};

export const CITIES_LOCATION: CityOffer[] = [
	{
		name: 'Paris',
		location: {
			latitude: 48.5112,
			longitude: 2.2055,
			zoom: 13,
		},
	},
	{
		name: 'Cologne',
		location: {
			latitude: 50.9375,
			longitude: 6.9603,
			zoom: 13,
		},
	},
	{
		name: 'Brussels',
		location: {
			latitude: 50.8503,
			longitude: 4.3517,
			zoom: 13,
		},
	},
	{
		name: 'Amsterdam',
		location: {
			latitude: 52.2226,
			longitude: 4.5322,
			zoom: 13,
		},
	},
	{
		name: 'Hamburg',
		location: {
			latitude: 53.5511,
			longitude: 9.9937,
			zoom: 13,
		},
	},
	{
		name: 'Dusseldorf',
		location: {
			latitude: 51.2277,
			longitude: 6.7735,
			zoom: 13,
		},
	},
];

export const SortOffersType = {
	Popular: 'Popular',
	PriceToHigh: 'Price: low to high',
	PriceToLow: 'Price: high to low',
	TopRated: 'Top rated first',
} as const;