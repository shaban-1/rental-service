import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
	{
		id: "bbb06a0e-3f92-446d-9a68-cb64b5d38e2b",
		title: "Уютная квартира в центре Амстердама",
		type: "apartment",
		price: 370,
		previewImage: "apartment-01.jpg",
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
		isPremium: false,
		isFavorite: true,
		rating: 4.9,
	},
	{
		id: "bbb06a0e-3f92-446d-9a68-cb64b5d38e3b",
		title: "Квартира с видом на канал",
		type: "apartment",
		price: 320,
		previewImage: "apartment-02.jpg",
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
		isPremium: true,
		isFavorite: true,
		rating: 4.8,
	},
	{
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e4b',
    title: 'Апартаменты в старом городе',
    type: 'apartment',
    price: 260,
    previewImage: 'apartment-03.jpg',
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
    isPremium: false,
    isFavorite: true,
    rating: 4.6
  },
  {
    id: 'bbb06a0e-3f92-446d-9a68-cb64b5d38e5b',
    title: 'Апартаменты в старом городе',
    type: 'apartment',
    price: 260,
    previewImage: 'apartment-03.jpg',
    city: {
		name: 'Brussels',
		location: { 
			latitude: 50.8503, 
			longitude: 4.3517, 
			zoom: 13,
		}
	},
    location: { 
		latitude: 50.850353943508, 
		longitude: 4.35179666406198, 
		zoom: 16,
	},
    isPremium: false,
    isFavorite: true,
    rating: 4.9
  },
];
