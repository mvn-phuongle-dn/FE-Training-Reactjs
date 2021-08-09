import React from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { useSelector } from 'react-redux';

const Header = () => {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  }
  const statusLogin = useSelector(state => state.login.value);
  const countCart = useSelector(state => state.cart.value.length);
  return(
    <>
      <header className="page-header">
        <div className="container">
          <div className="header-wrap">
            <div className="header-left">
              <a href="/">
                <img src={logo} className="img-logo" alt="logo" />
              </a>
              <nav className="nav">
                <ul className="nav-list">
                  <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/" className="nav-link" href="#">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/products" className="nav-link" href="#">Product</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact activeClassName="active" to="/about-us" className="nav-link" href="#">About us</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right">
              <ul className="menu">
                <li className="menu-item">
                  <a className="page-link" href="#"><i className="fas fa-user"></i></a>
                  <ul>
                    <li>
                      {!statusLogin ? <Link to="/auth/login" className="page-link">Login <i className="fas fa-sign-in-alt"></i></Link> :
                      <Link onClick={handleLogout} className="page-link">Logout <i className="fas fa-sign-out-alt"></i></Link>}
                    </li>
                    <li><Link to="/account" className="page-link" href="#">My account</Link></li>
                  </ul>
                </li>
                <li className="menu-item cart-number-wrap">
                  <Link to="/" className="page-link" href="#">My cart <i className="fas fa-shopping-cart"></i></Link>
                  {!!countCart && <span className="cart-number">{countCart}</span>}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
