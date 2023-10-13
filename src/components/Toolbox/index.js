import React from 'react'
import styles from './index.module.css';
import { COLORS, MENU_ITEMS } from '@/constants';
import { useSelector, useDispatch } from 'react-redux';
import {changeBrushSize,changeColor} from '../../pages/slice/toolboxSlice';
import cx from 'classnames';

const Toolbox = () => {
    const dispatch = useDispatch(null);

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const showstrokeToolOption = activeMenuItem=== MENU_ITEMS.PENCIL;
    const showBrushToolOption = activeMenuItem=== MENU_ITEMS.ERASER || activeMenuItem=== MENU_ITEMS.PENCIL
    const {color, size} = useSelector((state) => state.toolbox[activeMenuItem])
console.log(color, size)
    const updateBrushSize = (e)=>{
        dispatch(changeBrushSize({item: activeMenuItem, size: e.target.value}))

    }
    const updateColour = (itemcolor)=>{
        dispatch(changeColor({item: activeMenuItem, color: itemcolor}))

    }
  return (
    <div className={styles.toolBoxContainer}>
    {showstrokeToolOption && 
        <div className={styles.tooItem}>
        <h4 className={styles.toolText}>Stroke Colour</h4>
        <div className={styles.itemContainer}>
                    <div className={cx(styles.color, {[styles.active]: color === COLORS.BLACK})} style={{ backgroundColor: COLORS.BLACK, width: '15px', height: "15px" }} onClick={()=>updateColour(COLORS.BLACK)}></div>
                    <div className={cx(styles.color, {[styles.active]: color === COLORS.BLUE})} style={{ backgroundColor: COLORS.BLUE, width: '15px', height: "15px" }}  onClick={()=>updateColour(COLORS.BLUE)}></div>
                    <div className={cx(styles.color, {[styles.active]: color === COLORS.GREEN})} style={{ backgroundColor: COLORS.GREEN, width: '15px', height: "15px" }}  onClick={()=>updateColour(COLORS.GREEN)}></div>
                    <div className={cx(styles.color, {[styles.active]: color === COLORS.YELLOW})} style={{ backgroundColor: COLORS.YELLOW, width: '15px', height: "15px" }}  onClick={()=>updateColour(COLORS.YELLOW)}></div>
                    <div className={cx(styles.color, {[styles.active]: color === COLORS.RED})} style={{ backgroundColor: COLORS.RED, width: '15px', height: "15px" }}  onClick={()=>updateColour(COLORS.RED)}></div>
                    <div className={cx(styles.color, {[styles.active]: color === COLORS.PURPLE})} style={{ backgroundColor: COLORS.PURPLE, width: '15px', height: "15px" }}  onClick={()=>updateColour(COLORS.PURPLE)}></div>
                    <div className={cx(styles.color, {[styles.active]: color === COLORS.BROWN})} style={{ backgroundColor: COLORS.BROWN, width: '15px', height: "15px" }}  onClick={()=>updateColour(COLORS.BROWN)}></div>
                    <div className={cx(styles.color, {[styles.active]: color === COLORS.ORANGE})} style={{ backgroundColor: COLORS.ORANGE, width: '15px', height: "15px" }}  onClick={()=>updateColour(COLORS.ORANGE)}></div>
                </div>
    </div>}
    
   {showBrushToolOption && 
    <div className={styles.tooItem}>
      <h4 className={styles.toolText}>Brush Size</h4>
      <div className={styles.itemContainer}>
      <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} value={size}></input>
      </div>
    </div>}
   
    </div>
  )
}

export default Toolbox;