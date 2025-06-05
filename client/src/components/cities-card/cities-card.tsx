import React from 'react';
import { STARS_COUNT } from "../../const";
import { Link } from "react-router-dom";

type CitiesCardProps = {
	id: string;
	title: string;
	type: string;
	price: number;
	isPremium: boolean;
	previewImage: string;
	rating: number;
	onListItemHover?: (offerId: string | null) => void;
}

function CitiesCard({ id, title, type, price, previewImage, isPremium, rating, onListItemHover, }: CitiesCardProps) {
	return (
		<article
			className="cities__card place-card"
			onMouseOver={() => onListItemHover && onListItemHover(id)}
			onMouseOut={() => onListItemHover && onListItemHover(null)}
		>
			{isPremium && (
				<div className="place-card__mark">
					<span>Premium</span>
				</div>
			)}
			<div className="cities__image-wrapper place-card__image-wrapper">
				<Link to={`/offer/:id/${id}`}>
					<img
						className="place-card__image"
						src={`/img/${previewImage}`}
						width="260"
						height="200"
						alt={title}
					/>
				</Link>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">€{price}</b>
						<span className="place-card__price-text">/&nbsp;night</span>
					</div>
					<button className="place-card__bookmark-button button" type="button">
						<svg className="place-card__bookmark-icon" width="18" height="19">
							<use href="#icon-bookmark" />
						</svg>
						<span className="visually-hidden">To bookmarks</span>
					</button>
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{ width: `${rating * 100/ STARS_COUNT }%` }} />
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<Link to={`/offer/:id/${id}`}>{title}</Link>
				</h2>
				<p className="place-card__type">{type}</p>
			</div>
		</article>
	)
}

export { CitiesCard };