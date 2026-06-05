import {StrictMode} from 'react';
import {renderToString} from 'react-dom/server';
import App from './App.tsx';

// Used at build time by prerender.js to produce static HTML for #root.
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
