import { MENU_ITEMS } from '@/constants';
import React, { useEffect, useRef, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionItemClick } from '../../pages/slice/menuSlice';
import { socket } from '@/socket';

const Board = () => {

    const dispatch = useDispatch();
    const drawHistory = useRef([]);
    const historyPointer = useRef(0)

    const canvasRef = useRef(null);
    const shouldDraw = useRef(false)
    const { actionMenuItem, activeMenuItem } = useSelector((state) => state.menu);
    const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

    useEffect(() => {
        if (!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        if (actionMenuItem === MENU_ITEMS.DOWNLOAD) {
            const Url = canvas.toDataURL()
            const anchor = document.createElement('a')
            anchor.href = Url;
            anchor.download = 'sketch.jpg';
            anchor.click()

        } else if (actionMenuItem === MENU_ITEMS.UNDO || actionMenuItem === MENU_ITEMS.REDO) {
            if (historyPointer.current > 0 && actionMenuItem === MENU_ITEMS.UNDO) historyPointer.current -= 1
            if (historyPointer.current < drawHistory.current.length - 1 && actionMenuItem === MENU_ITEMS.REDO) historyPointer.current += 1
            const imageData = drawHistory.current[historyPointer.current]
            context.putImageData(imageData, 0, 0)
        }
        dispatch(actionItemClick(null));

    }, [actionMenuItem, dispatch])

    useEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        const changeConfig = (color, size) => {
            context.strokeStyle = color,
                context.lineWidth = size

        }
        changeConfig(color, size)

    }, [color, size])

    useLayoutEffect(() => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        //when mounting

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const designPath = (x, y) => {
            context.beginPath();
            context.moveTo(x, y)

        }
        const drawLine = (x, y) => {
            context.lineTo(x, y);
            context.stroke();
        }


        const handleMouseDown = (e) => {
            shouldDraw.current = true;
            designPath(e.clientX, e.clientY)


        }

        const handleMouseMove = (e) => {
            if (!shouldDraw.current) return;
            drawLine(e.clientX, e.clientY)

        }

        const handleMouseUp = (e) => {
            shouldDraw.current = false;
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            drawHistory.current.push(imageData)
            historyPointer.current = drawHistory.current.length - 1;

        }

        // context.beginPath();
        // context.moveTo(0, 0);
        // context.lineTo(100, 100)
        // context.stroke()

        canvas.addEventListener('mousedown', handleMouseDown)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseup', handleMouseUp)

        socket.on("connect", () => {
            console.log('client connected');
        });

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])
    return (
        <div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default Board;