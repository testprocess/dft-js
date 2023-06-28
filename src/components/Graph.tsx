
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addX } from '../features/graphSlice';

type DrawPointType = {
    x: number,
    t: number
}

function Graph() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addX({
            x: Math.round(Math.random() * 100)
        }))

    }

    return (
        <div>
            <button onClick={handleClick}>Random X</button>
            <GraphCanvas></GraphCanvas>

        </div>
    )
}

function GraphCanvas(props: any) {
    const count = useSelector((state: any) => state.graph.value);
    const canvasRef = useRef()

    useEffect(() => {
        const canvas: any = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        let t = 1
        for (const iterator of count) {
            console.log(iterator)
            drawPoint({ x: iterator, t: t })
            t += 10

        }

    }, [count])

    const drawPoint = ({ x, t }: DrawPointType) => {
        const canvas: any = canvasRef.current
        let ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(t, x, 5, 0, 2*Math.PI);
        ctx.fill();
    }


    return (
        <div>
            <canvas ref={canvasRef}></canvas>
            {count}

        </div>
    )
}

export { Graph }