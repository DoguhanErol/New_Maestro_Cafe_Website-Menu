import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import homeIcon from './../../../assets/homeIcon.svg';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="text-xs text-primary breadcrumbs" aria-label="Breadcrumb" role="navigation">
      <ul>
      <li>
          <img src={homeIcon} alt="Home Icon" />
        </li>
        <li>
          <Link to="/">ANA SAYFA</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={name}>
              {isLast ? (
                <span>{name.toUpperCase()}</span>
              ) : (
                <Link to={routeTo}>{name.toUpperCase()}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
