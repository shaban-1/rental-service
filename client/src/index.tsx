import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { offers } from './mocks/offers'
import { Setting } from './const'
import { offersList } from './mocks/offers-list'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App
			rentalOffersCount={ Setting.RentalOffersCount }
			offersList={ offersList }
			offers = { offers }
		/>
	</StrictMode>,
)