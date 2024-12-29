import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FirebaseAppProvider } from 'reactfire';
import Bootstrap from './Bootstrap.tsx';
import firebaseConfig from './core/services/firebase.ts';
import './index.scss';
import "primereact/resources/themes/lara-light-cyan/theme.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Bootstrap />
    </FirebaseAppProvider>
  </StrictMode>,
);
