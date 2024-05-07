import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
import 'primeicons/primeicons.css';

const NavBar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        navigate('/');
      },
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      command: () => {
        navigate('/about');
      },
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      command: () => {
        navigate('/contact');
      },
    },
    {
      label: 'Login',
      icon: 'pi pi-sign-in',
      command: () => {
        navigate('/login');
      },
    },
  ];

  return (
    <div className='nav'>
      <Menubar className='model'  model={items} />
    </div>
  );
};

export default NavBar;
