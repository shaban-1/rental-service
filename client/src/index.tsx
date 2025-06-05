import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { offers } from './mocks/offers'
import { store } from './store'
import { Provider } from 'react-redux'
import { AuthorizationStatus } from './const'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
			<App
				// rentalOffersCount={ Setting.RentalOffersCount }
				// offersList={ offersList }
				offers={offers}
				authorizationStatus={AuthorizationStatus.Auth}
			/>
		</Provider>
)