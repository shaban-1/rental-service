import { MainPage } from "../../pages/main-page/main-page";
import { FavoritesPage } from "../../pages/favorites-page/favorites-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { OfferPage } from "../../pages/offer-page/offer-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JSX } from "react";
import { AppRoute, AuthorizationStatus } from '../../const';
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer } from "../../types/offer";

type AppMainPageProps = {
	offers: FullOffer[];
	authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
}

function App({ offers, authorizationStatus, }: AppMainPageProps): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={AppRoute.Main} element={<MainPage />} />
				<Route path={AppRoute.Login} element={<LoginPage />} />
				<Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={authorizationStatus}>
					<FavoritesPage offers={offers} /> </PrivateRoute>} />
				<Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers} />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export { App };