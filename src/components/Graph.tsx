
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

    const handleClickSin = () => {
        drawSinGraph()
    }

    const drawSinGraph = () => {
        let points = getSinGraphPoint()

        for (let index = 0; index < points.length; index++) {
            dispatch(addX({
                x: points[index]
            }))            
        }

    }

    const getSinGraphPoint = () => {
        let t = 100
        let points = []
        for (let index = 0; index < t; index++) {
            points.push(Math.sin(index) * 10)
        }

        return points
    }

    return (
        <div>
            <button onClick={handleClick}>Random X</button>
            <button onClick={handleClickSin}>Sin Graph</button>

            <GraphCanvas></GraphCanvas>

        </div>
    )
}

function GraphCanvas(props: any) {
    const count = useSelector((state: any) => state.graph.value);
    const canvasRef = useRef()
    const minusLine = 300

    useEffect(() => {
        const canvas: any = canvasRef.current
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        drawMinusLine()

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
        ctx.arc(t, x + minusLine, 5, 0, 2*Math.PI);
        ctx.fill();
    }

    const drawMinusLine = () => {
        const canvas: any = canvasRef.current
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(0, minusLine);
        ctx.lineTo(window.innerWidth, minusLine);

        ctx.stroke();
    }



    return (
        <div>
            <canvas ref={canvasRef}></canvas>
            {count}

        </div>
    )
}

export { Graph }