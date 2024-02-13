import App from '@root/App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}

/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@root/App.tsx'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
*/

