import { Logo } from '../../components/logo/logo';

function NotFoundPage() {
	return (
		<div className="page page--gray">
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
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<main className="page__main page__main--not-found">
				<div className="container">
					<section className="not-found">
						<h1 className="not-found__title">404</h1>
						<p className="not-found__text">Page not found</p>
						<a className="not-found__link" href="/">
						Return to main page
						</a>
					</section>
				</div>
			</main>
		</div>
	);
}
export { NotFoundPage };