import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ContextProvider } from './context';

// Znajdź element o id 'root'
const rootElement = document.getElementById('root');

// Upewnij się, że element istnieje
if (rootElement) {
  // Utwórz root za pomocą ReactDOM.createRoot
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ContextProvider>
        <App />
      </ContextProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
