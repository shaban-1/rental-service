import { useParams } from "react-router-dom";
import { Logo } from "../../components/logo/logo"
import { FullOffer } from "../../types/offer"
import { NotFoundPage } from "../not-found-page/not-found-page";
import { STARS_COUNT } from "../../const";
import { ReviewForm } from "../../components/review-form/review-form";
import { ReviewList } from '../../components/review-list/review-list';
import { reviews } from '../../mocks/reviews';
import { Map } from '../../components/map/map';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { OffersList } from "../../types/offer" 


type OfferProps = {
	offers: FullOffer[];
}

function OfferPage({offers} : OfferProps) {
	const { id } = useParams<{ id: string }>();
	const offer = offers.find((item) => item.id === id);
	if (!offer){
		return <NotFoundPage />
	}
	const nearbyFullOffers = offers.filter((item) => item.id !== id).slice(0, 3);

	const nearbyOffersList: OffersList[] = nearbyFullOffers.map((fo) => ({
		id: fo.id,
		title: fo.title,
		type: fo.type,
		price: fo.price,
		previewImage: fo.images[0],
		city: fo.city,
		location: fo.location,
		isPremium: fo.isPremium,
		isFavorite: fo.isFavorite,
		rating: fo.rating,
	}));
	
	const offerCenter: [number, number] = [offer.location.latitude, offer.location.longitude];

	return (
		<div className="page">
			<header className="header">
				<div className="container">
					<div className="header__wrapper">
						<div className="header__left">
							<Logo />
						</div>
						<nav className="header__nav">
							<ul className="header__nav-list">
								<li className="header__nav-item user">
									<a className="header__nav-link header__nav-link--profile" href="#">
										<div className="header__avatar-wrapper user__avatar-wrapper"></div>
										<span className="header__user-name user__name">Myemail@gmail.com</span>
										<span className="header__favorite-count">
											{offers.filter((o) => o.isFavorite).length}
										</span>
									</a>
								</li>
								<li className="header__nav-item">
									<a className="header__nav-link" href="#">
										<span className="header__signout">Sign out</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>

			<main className="page__main page__main--offer">
				<section className="offer">
					<div className="offer__gallery-container container">
						<div className="offer__gallery">
							{offer.images.map((item) => (
								<div key={item} className="offer__image-wrapper">
									<img className="offer__image" src={`/img/${item}`} alt="Photo studio" />
								</div>
							))}
						</div>
					</div>

					<div className="offer__container container">
						<div className="offer__wrapper">
							{offer.isPremium ? (
								<div className="offer__mark">
									<span>Premium</span>
								</div>) : null
							}
							<div className="offer__name-wrapper">
								<h1 className="offer__name">{offer.title}</h1>
								<button className="offer__bookmark-button button" type="button">
									<div style={{ display: 'none' }}>
										<svg xmlns="http://www.w3.org/2000/svg">
										<symbol id="icon-arrow-select" viewBox="0 0 7 4">
											<path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" />
										</symbol>
										<symbol id="icon-bookmark" viewBox="0 0 17 18">
											<path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
										</symbol>
										<symbol id="icon-star" viewBox="0 0 13 12">
											<path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" />
										</symbol>
										</svg>
									</div>
									<span className="visually-hidden">
										{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
									</span>
								</button>
							</div>
							<div className="offer__rating rating">
								<div className="offer__stars rating__stars">
									<span style={{ width: `${(offer.rating / STARS_COUNT) * 100}%` }}></span>
									<span className="visually-hidden">Rating</span>
								</div>
								<span className="offer__rating-value rating__value">{offer.rating}</span>
							</div>
							<ul className="offer__features">
								<li className={`offer__feature offer__feature--${offer.type}`}>
									{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
								</li>
								<li className="offer__feature offer__feature--bedrooms">
									{offer.bedrooms} Bedrooms
								</li>
								<li className="offer__feature offer__feature--adults">
									Max {offer.maxAdults} adults
								</li>
							</ul>
							<div className="offer__price">
								<b className="offer__price-value">&euro;{offer.price}</b>
								<span className="offer__price-text">&nbsp;night</span>
							</div>
							<div className="offer__inside">
								<h2 className="offer__inside-title">What's inside</h2>
								<ul className="offer__inside-list">
									{offer.goods.map((good) => (
										<li key={good} className="offer__inside-item">
											{good}
										</li>
									))}
								</ul>
							</div>
							<div className="offer__host">
								<h2 className="offer__host-title">Meet the host</h2>
								<div className="offer__host-user user">
									<div
										className={`offer__avatar-wrapper user__avatar-wrapper${
											offer.host.isPro ? ' offer__avatar-wrapper--pro' : ''
										}`}
									>
										<img
											className="offer__avatar user__avatar"
											src={`/img/${offer.host.avatarUrl}`}
											width="74"
											height="74"
											alt={offer.host.name}
										/>
									</div>
									<span className="offer__user-name">{offer.host.name}</span>
									{offer.host.isPro && <span className="offer__user-status">Pro</span>}
								</div>
							</div>
							<ReviewList reviews={reviews} />
							<ReviewForm />
						</div>
					</div>
				</section>
				<section className="offer__map map" style={{ width: '100%', height: '450px' }}>
					<Map fullOffers={nearbyFullOffers} center={offerCenter} zoom={13} />
				</section>
				<div className="container">
					<section className="near-places places">
						<h2 className="near-places__title">Other places in the neighbourhood</h2>
						<div className="near-places__list places__list">
							<CitiesCardList offersList={nearbyOffersList} />
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}

export { OfferPage, OfferProps}