// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './apps/App1';
import App2 from './apps/App2';
import App3 from './apps/App3';

// Mount each app to its respective DOM element
const renderApp = (Component: React.ComponentType, elementId: string) => {
    const container = document.getElementById(elementId);
    if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(<Component/>);
    }
};

renderApp(App1, 'app1');
renderApp(App2, 'app2');
renderApp(App3, 'app3');