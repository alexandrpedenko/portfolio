import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import './style.sass';

export const MenuButton = ({ active, setModalOpen }) => {
  let buttonClass = active ? 'active' : '';

  const buttonHandler = () => {
    setModalOpen();
  };

  return (
    <button className={`menu-button ${buttonClass}`} onClick={buttonHandler}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export const BackButton = ({ location }) => {
  const history = useHistory();
  const buttonHandler = () => {
    history.goBack();
  };

  if (location === '/') {
    return false;
  }

  return (
    <button className={`back-button`} onClick={buttonHandler}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export const AppNavigation = ({ menuOpen }) => {
  return (
    <div className={`app-menu ${menuOpen ? 'active' : ''}`}>
      <div className='app-menu__wrap'>
        <nav className='app-menu__links'>
          <NavLink exact to='/' className='app-menu__links-item'>
            <span>About</span>
          </NavLink>
          <NavLink exact to='/projects' className='app-menu__links-item'>
            <span>Projects</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  let location = useLocation();
  useEffect(() => {
    setIsOpen(false);
    console.log(location);
  }, [location]);

  const buttonHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BackButton location={location.pathname} />
      <MenuButton active={isOpen} setModalOpen={buttonHandler} />
      <AppNavigation menuOpen={isOpen} />
    </>
  );
};
