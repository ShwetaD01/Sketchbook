import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux';

const Board = () => {

    const canvasRef = useRef(null);
    const shouldDraw = useRef(false)
    // const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    // const {color, size} = useSelector((state) =>  state.toolbox[activeMenuItem])

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const {color, size} = useSelector((state) => state.toolbox[activeMenuItem])
console.log(color, size, 'kkk')
   
    useEffect(()=>{
        if(!canvasRef.current) return

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        const changeConfig = (color, size) => {
            context.strokeStyle = color,
            context.lineWidth = size

        } 
        changeConfig(color, size)

    },[color, size])

    useLayoutEffect(()=>{
        if(!canvasRef.current) return

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        //when mounting

        canvas.width = window.innerWidth;
        canvas.height= window.innerHeight;

        const designPath = (x, y) => {
            context.beginPath();
            context.moveTo(x,y)

        }
        const drawLine = (x, y) => {
            context.lineTo(x,y);
            context.stroke();
        }


        const handleMouseDown = (e)=> {
            shouldDraw.current = true;
            designPath(e.clientX, e.clientY)
           

        }
        
        const handleMouseMove=  (e) => {
            if(!shouldDraw.current) return;
            drawLine(e.clientX, e.clientY)
           
        }
        
        const handleMouseUp = (e)=> {
            shouldDraw.current = false;
        }

        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(100, 100)
        context.stroke()

        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseup', handleMouseUp)

       

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseup', handleMouseUp)
        }
    },[])
  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default Board;