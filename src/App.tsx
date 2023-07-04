import React from 'react';
import './App.css'

import { Graph } from './components/Graph'
import { FourierTransform } from './components/FourierTransform'




const App: any = () => {
    return (
        <div>

            <Graph></Graph>
            <FourierTransform></FourierTransform>

        </div>
    );
};

export default App;