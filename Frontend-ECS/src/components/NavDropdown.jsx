import React, { useState } from 'react';
import styles from './Nav.module.css'
import classNames  from "classnames";
const NavDropdown = () => {
    // State to manage the active class
    const [isActive, setIsActive] = useState(false);

    // Toggle the active state
    const toggleActive = () => {
        setIsActive(!isActive);
    };
  return (
    <div>
        <div className={classNames(styles.dots, { [styles.active]: isActive })} onClick={toggleActive}>
  <div className={styles.dot}></div>
  <div className={styles.dot}></div>
  <div className={classNames(styles.shadow, styles.cut)}></div>
  <div className={classNames(styles.container ,styles.cut)}>
    <div className={classNames(styles.drop, styles.cut2)}></div>
  </div>
  <div className={styles.list}>
    <ul className='flex gap-3'>
      <li className={styles.liItem}>
        Home
      </li>
      <li className={styles.liItem}>
        Annual Attraction
      </li>
      <li className={styles.liItem}>
        Members
      </li>
      <li className={styles.liItem}>
        Developers
      </li>
      <li className={styles.liItem}>
        Resource Hub
      </li>
      <li className={styles.liItem}>
        Register for Spectrum 11.0
      </li>
    </ul>
  </div>
  <div className={styles.dot}></div>
</div>
<div className={classNames(styles.dots, { [styles.active]: isActive })} onClick={toggleActive}></div>
    </div>
  )
}

export default NavDropdown