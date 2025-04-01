import React from 'react';
import { useStore } from '../store/store';

const App1: React.FC = () => {
    // Use the store directly
    const counter = useStore((state) => state.counter);
    const increment = useStore((state) => state.increment);
    const decrement = useStore((state) => state.decrement);

    return (
        <div className="app-container">
            <h1>App 1: Counter</h1>
            <div className="counter-display">Counter: {counter}</div>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
};

export default App1;