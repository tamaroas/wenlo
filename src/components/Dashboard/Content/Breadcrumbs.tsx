import React, { useEffect, useState } from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const location = useLocation();
  const [actual, setActual] = useState('');
  useEffect(() => {
    if (location.pathname === '/dashboard') setActual('Dashboard');
    else {
      const path = location.pathname.split('/');
      const actual = path[2];
      setActual(actual);
    }
  }, [location.pathname]);
  const breadcrumbs = [<Link to="/">Wenlo</Link>, <p>{actual}</p>];
  return (
    <div className={styles.container}>
      <MuiBreadcrumbs
        separator={<FaChevronRight size={14} color={'#828282'} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </MuiBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
