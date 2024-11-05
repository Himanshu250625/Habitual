import './Header.css';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../const/app-routes';

function HeaderWithoutNav() {
  return (
    <>
      <header className="Header">
        <div className="page-header__container">
          <div className="page-header-logo__container">
            <Link to={appRoutes.Main} title="to the main page">
              <img
                className="page-header__logo"
                src="/21day.png"
                alt="21 days logo"
              />
            </Link>
            <div className="container">
              <Link to={appRoutes.Main} title="to the main page">
                <h3 className="page-header__title">Habitual21</h3>
                <small> In three weeks, you can cultivate a new habit</small>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderWithoutNav;
