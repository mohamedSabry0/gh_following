import { NavLink, Outlet } from 'react-router-dom';
import profileIcon from './images/icons8-user-50.png';

export default function Layout() {
  return (
    <>
      <nav>
        <div>
          <h1 className="logo">Bookstore CMS</h1>
          <ul>
            <li>
              <NavLink to="/">
                BOOKS
              </NavLink>
            </li>
            <li>
              <NavLink to="categories">
                CATEGORIES
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="profile-button">
          <img src={profileIcon} alt="profile icon" />
        </div>
      </nav>
      <Outlet />
    </>
  );
}
