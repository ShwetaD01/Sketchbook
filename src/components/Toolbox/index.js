import React from 'react'
import styles from './index.module.css';
import { COLOURS } from '@/constants';


const Toolbox = () => {
    const updateBrushSize = (e)=>{

    }
  return (
    <div className={styles.toolBoxContainer}>
    <div className={styles.tooItem}>
    <h4 className={styles.toolText}>Stroke Colour</h4>
    <div className={styles.itemContainer}>
      <div className={styles.color} style={{backgroundColor: COLOURS.BLACK , width:'15px', height:"15px"}}></div>
      <div className={styles.color} style={{backgroundColor: COLOURS.BLUE , width:'15px', height:"15px"}}></div>
      <div className={styles.color} style={{backgroundColor: COLOURS.GREEN , width:'15px', height:"15px"}}></div>
      <div className={styles.color} style={{backgroundColor: COLOURS.YELLOW, width:'15px', height:"15px"}}></div>
      <div className={styles.color} style={{backgroundColor: COLOURS.RED, width:'15px', height:"15px"}}></div>
      <div className={styles.color} style={{backgroundColor: COLOURS.PURPLE, width:'15px', height:"15px"}}></div>
      <div className={styles.color} style={{backgroundColor: COLOURS.BROWN, width:'15px', height:"15px"}}></div>
      <div className={styles.color} style={{backgroundColor: COLOURS.ORANGE, width:'15px', height:"15px"}}></div>
      </div>
    
    </div>
    <div className={styles.tooItem}>
      <h4 className={styles.toolText}>Brush Size</h4>
      <div className={styles.itemContainer}>
      <input type="range" min={1} max={10} step={1} onChange={updateBrushSize}></input>
      </div>
    </div>
    </div>
  )
}

export default Toolbox;

