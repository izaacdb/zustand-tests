// src/apps/App2.tsx
import React, { useState } from 'react';
import { useStore } from '../store/store';

const App2: React.FC = () => {
    // Use the store directly
    const todos = useStore((state) => state.todos);
    const addTodo = useStore((state) => state.addTodo);
    const toggleTodo = useStore((state) => state.toggleTodo);
    const removeTodo = useStore((state) => state.removeTodo);

    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            addTodo(newTodo.trim());
            setNewTodo('');
        }
    };

    return (
        <div className="app-container">
            <h1>App 2: Todo List</h1>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                    onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <div>
                {todos.length === 0 ? (
                    <p>No todos yet. Add one above!</p>
                ) : (
                    todos.map(todo => (
                        <div key={todo.id} className="todo-item">
                            <div>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                />
                                <span style={{
                                    marginLeft: '10px',
                                    textDecoration: todo.completed ? 'line-through' : 'none'
                                }}>
                  {todo.text}
                </span>
                            </div>
                            <button className="remove-button" onClick={() => removeTodo(todo.id)}>Remove</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default App2;