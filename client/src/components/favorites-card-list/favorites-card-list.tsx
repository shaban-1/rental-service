import { FavoritesCard } from "../favorites-card/favorites-card";
import { FullOffer } from '../../types/offer';

type FavoritesCardListProps = {
	favorites: FullOffer[];
};

function FavoritesCardList({ favorites }: FavoritesCardListProps) {
	return (
		<ul className="favorites__places">
			{favorites.map((offer) => (
				<FavoritesCard key={offer.id} offer={offer} />
			))}
		</ul>
	);
}

export { FavoritesCardList };