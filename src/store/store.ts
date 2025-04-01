import { create } from 'zustand';

// Define the store state interface
interface StoreState {
    counter: number;
    todos: { id: number; text: string; completed: boolean }[];
    theme: 'light' | 'dark';

    // Actions
    increment: () => void;
    decrement: () => void;
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    setTheme: (theme: 'light' | 'dark') => void;
}

// Create the store
export const useStore = create<StoreState>((set) => ({
    counter: 0,
    todos: [],
    theme: 'light',

    // Action implementations
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),

    addTodo: (text) => set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false }]
    })),

    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    })),

    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),

    setTheme: (theme) => set({ theme })
}));

