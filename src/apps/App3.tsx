import React from 'react';
import { useStore } from '../store/store';

const App3: React.FC = () => {
    // Use the store directly
    const theme = useStore((state) => state.theme);
    const counter = useStore((state) => state.counter);
    const todos = useStore((state) => state.todos);
    const setTheme = useStore((state) => state.setTheme);

    return (
        <div className="app-container" style={{
            backgroundColor: theme === 'dark' ? '#333' : '#fff',
            color: theme === 'dark' ? '#fff' : '#333',
        }}>
            <h1>App 3: App Status & Theme Switcher</h1>
            <div>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>Current Store State:</h3>
                <p>Theme: {theme}</p>
                <p>Counter: {counter}</p>
                <p>Total Todos: {todos.length}</p>
                <p>Completed Todos: {todos.filter(todo => todo.completed).length}</p>
            </div>
        </div>
    );
};

export default App3;