import React from 'react';
import {useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faEraser, faRotateLeft,faRotateRight,faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css'
import { MENU_ITEMS } from '@/constants';
import { menuItemClick } from '@/pages/slice/menuSlice';
import { useSelector } from 'react-redux';
import cx from 'classnames';


const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state)=> state.menu.activeMenuItem)
  const handleClick =(item) => {
dispatch(menuItemClick(item))
  }
  return (
    <div className={styles.menuContainer}>
      <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL})} onClick={()=> {handleClick(MENU_ITEMS.PENCIL)}}>
      <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper} onClick={()=> {handleClick(MENU_ITEMS.ERASER)}}>
      <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
      <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}/>
      </div>
      <div className={styles.iconWrapper}>
      <FontAwesomeIcon icon={faRotateRight} className={styles.icon}/>
      </div>
      <div className={styles.iconWrapper}>
      <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon}/>
      </div>
    </div>
  )
}

export default Menu;
