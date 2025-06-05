import React, { useState, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { SortOffersType } from '../../const';
import { SortOffer } from '../../types/sort';

type SortOptionsProps = {
	activeSorting: SortOffer;
	onChange: (newSorting: SortOffer) => void;
};

function SortOptions({ activeSorting, onChange }: SortOptionsProps): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);

	const iconStyle = {
		transform: `translateY(-50%) ${isOpen ? 'rotate(180deg)' : ''}`,
	};

	const keyDownHandler = (evt: KeyboardEvent<HTMLFormElement>) => {
		if (evt.key === 'Escape' && isOpen) {
			evt.preventDefault();
			setIsOpen(false);
		}
	};

	const typeClickHandler = () => {
		setIsOpen((prev) => !prev);
	};

	const sortingItemClickHandler = (type: SortOffer) => {
		onChange(type);
		setIsOpen(false);
	};

	return (
		<form className="places__sorting" action="#" method="get" onKeyDown={keyDownHandler}>
			<span className="places__sorting-caption">Sort by</span>
			<span
				className="places__sorting-type"
				tabIndex={0}
				onClick={typeClickHandler}
			>
				{activeSorting}
				<svg
					className="places__sorting-arrow"
					width={7}
					height={4}
					style={iconStyle}
				>
					<use xlinkHref="#icon-arrow-select"></use>
				</svg>
			</span>
			<ul
				className={classNames(
					'places__options',
					'places__options--custom',
					{ 'places__options--opened': isOpen }
				)}
			>
				{Object.values(SortOffersType).map((type) => (
					<li
						key={type}
						className={classNames(
							'places__option',
							{ 'places__option--active': type === activeSorting }
						)}
						tabIndex={0}
						onClick={() => sortingItemClickHandler(type as SortOffer)}
					>
						{type}
					</li>
				))}
			</ul>
		</form>
	);
}

export { SortOptions };