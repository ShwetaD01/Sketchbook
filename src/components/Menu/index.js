import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faEraser, faRotateLeft,faRotateRight,faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css'
import { MENU_ITEMS } from '@/constants';
import { menuItemClick, actionItemClick } from '@/slice/menuSlice';
import cx from 'classnames';


const Menu = () => {
  const dispatch = useDispatch();

  const activeMenuItem = useSelector((state)=> state.menu.activeMenuItem);

  const handleClick =(item) => {
  dispatch(menuItemClick(item))
  }
  const handleActionClick =(item) => {
    dispatch(actionItemClick(item))
    }

  return (
    <div className={styles.menuContainer}>
      <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL})} onClick={()=> {handleClick(MENU_ITEMS.PENCIL)}}>
      <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div className={cx(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.ERASER})}  onClick={()=> {handleClick(MENU_ITEMS.ERASER)}}>
      <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper} onClick={()=> handleActionClick(MENU_ITEMS.UNDO)}>
      <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper} onClick={()=> handleActionClick(MENU_ITEMS.REDO)}>
      <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper} onClick={()=> handleActionClick(MENU_ITEMS.DOWNLOAD)}>
      <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon}/>
      </div>
    </div>
  )
}

export default Menu;
