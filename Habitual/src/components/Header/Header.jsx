import './Header.css';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../AuthContextWrapper/AuthContextWrapper';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';

import { appRoutes } from '../../const/app-routes';
import { authorizationStatus } from '../../const/const';

function Header() {
  const { authStatus, isLoading, authenticateUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    authenticateUser();
    navigate(appRoutes.Login);
  };

  if (isLoading || authorizationStatus === authorizationStatus.Unknown) {
    return <LoadingPage />;
  }

  return (
    <>
      <header className="Header">
        <div className="page-header__container">
          <div className="page-header-logo__container">
            <Link to={appRoutes.Main} title="to the main page">
              <img
                className="page-header__logo"
                src="/image/21day.png"
                alt="21 days logo"
              />
            </Link>
            <div className="container">
              <Link to={appRoutes.Main} title="to the main page">
                <h3 className="page-header__title">Habitual21</h3>
                <p> It takes only 21 days to make a habit...</p>
              </Link>
            </div>
          </div>

          <ul className="page-header-nav__list">
            <li>
              <NavLink
                to={appRoutes.Main}
                end
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
                to={appRoutes.Explore}
              >
                Explore habits
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
                to={appRoutes.Favorites}
              >
                Profile
              </NavLink>
            </li>
            {authStatus === authorizationStatus.NoAuth && (
              <li>
                <Link to={appRoutes.Login} className="btn link">
                  Log in
                </Link>
              </li>
            )}

            {authStatus === authorizationStatus.Auth && (
              <li>
                <button className="btn link btn--logout" onClick={handleLogout}>
                  Log out
                </button>
              </li>
            )}
          </ul>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
