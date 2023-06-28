
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addX } from '../features/graphSlice';

function Graph() {
    const count = useSelector((state: any) => state.graph.value);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addX({
            x: Math.round(Math.random() * 100)
        }))

    }

    return (
        <div>
            <button onClick={handleClick}>Random X</button>
            {count}

        </div>
    )
}

export { Graph }