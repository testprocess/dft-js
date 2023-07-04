import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import * as math from 'mathjs'

type DrawPointType = {
    x: number,
    t: number
}

function FourierTransform() {
    const count = useSelector((state: any) => state.graph.value);
    const canvasRef = useRef()
    const minusLine = 300

    useEffect(() => {
        const canvas: any = canvasRef.current
        canvas.width = window.innerWidth + 1000
        canvas.height = window.innerHeight

        drawMinusLine()


        let t = 1

        for (let k = 0; k < count.length; k++) {
            let total = 0

            for (let index = 0; index < count.length - 1; index++) {
                const element = count[index];
                const x = element
                const N = count.length - 1
                const a = math.complex(x * Math.cos(-1 * Math.PI * (k/N) * index), x * Math.sin(-1 * Math.PI * (k/N) * index))

                console.log(a)
                
                total += a.re
            }

            console.log(total/count.length)
            drawPoint({ x: (total/count.length)*100, t: t })

            t += 10
            total = 0 
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
            Fourier Transform:
            <canvas ref={canvasRef}></canvas>

        </div>
    )
}

export { FourierTransform }