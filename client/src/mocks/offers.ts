import { FullOffer } from "../types/offer";

export const offers: FullOffer[] = [
	{
		id: "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b",
		title: "Уютная квартира в центре Амстердама",
		description: "Светлая и современная квартира рядом с Лувром и Сенной. Отличный вариант для пары или небольшой семьи.",
		type: "apartment",
		price: 370,
		images: [
			"7.png",
			"2.png",
			"3.png",
			"4.png",
			"5.png",
			"1.png",
		],
		city: { 
			name: 'Amsterdam',
			location: { 
				latitude: 52.370216, 
				longitude: 4.895168, 
				zoom: 13,
			} 
		},
    	location: { 
			latitude: 52.3909553943508, 
			longitude: 4.85309666406198, 
			zoom: 16,
		},
		goods: [
			"Heating",
			"Wi-Fi",
			"Fridge",
			"Laptop friendly workspace",
			"Baby seat",
			"Air conditioning",
			"Washer",
			"Towels",
			"Dishwasher",
			"Kitchen",
			"Washing machine",
			"Breakfast",
			"Coffee machine",
		],
		host: {
			isPro: true,
			name: "Max",
			avatarUrl: "avatar-max.jpg",
		},
		isPremium: false,
		isFavorite: true,
		rating: 4.9,
		bedrooms: 2,
		maxAdults: 3,
	},
	{
		id: "bbb06a0e-3f92-446d-9a68-cb64b5d38e3b",
		title: "Квартира с видом на канал",
		description: "Роскошные апартаменты в самом сердце Парижа с панорамным видом.",
		type: "apartment",
		price: 320,
		images: [
			"1.png",
			"2.png",
			"3.png",
			"4.png",
			"5.png",
			"6.png",
		],
		city: {
			name: 'Amsterdam',
			location: {
				latitude: 52.370216,
				longitude: 4.895168,
				zoom: 13,
			}
		},
    	location: {
			latitude: 52.3609553943508,
			longitude: 4.85309666406198,
			zoom: 16,
		},
		goods: [
			"Heating",
			"Wi-Fi",
			"Fridge",
			"Laptop friendly workspace",
			"Baby seat",
			"Air conditioning",
			"Washer",
			"Towels",
			"Dishwasher",
			"Kitchen",
			"Washing machine",
			"Breakfast",
			"Coffee machine",
		],
		host: {
			isPro: true,
			name: "Hasbula",
			avatarUrl: "avatar-hasbula.jpg",
		},
		isPremium: true,
		isFavorite: true,
		rating: 4.8,
		bedrooms: 4,
		maxAdults: 6,
	},
	{
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e4b',
    title: 'Апартаменты в старом городе',
    description: 'Квартира с традиционным интерьером и видом на собор.',
    type: 'apartment',
    price: 260,
    images: [
		"6.png",
		"5.png",
		"4.png",
		"3.png",
		"2.png",
		"1.png",
	],
    city: {
		name: 'Amsterdam',
		location: {
			latitude: 52.370216,
			longitude: 4.895168,
			zoom: 13,
		}
	},
    location: { 
		latitude: 52.3909553943508, 
		longitude: 4.929309666406198, 
		zoom: 16 
	},
    goods: ['Air conditioning','Fridge','Washer'],
    host: {
		isPro: true,
		name: "Zaur",
		avatarUrl: "avatar-zaur.jpg",
	},
    isPremium: false,
    isFavorite: true,
    rating: 4.6,
    bedrooms: 2,
    maxAdults: 4
  },
];
