import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// If the HTML was prerendered (root has content), hydrate it.
// Otherwise (e.g. the dev server), do a normal client render.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
