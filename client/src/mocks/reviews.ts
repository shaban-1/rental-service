import { Review } from "../types/review";

const reviews: Review[] = [
	{
		'id': '1',
		'comment': 'The room was spacious and clean. The pool looked nothing like the photos.',
		'date': '2023-06-05T23:56:00.456Z',
		'rating': 4,
		'user': {
			'name': 'Angelina',
			'avatarUrl': 'avatar-angelina.jpg',
			'isPro': true
		}
	}
];

export { reviews };