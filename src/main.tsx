import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { FirebaseAppProvider } from 'reactfire';
import './index.scss';

const {
  REACT_APP_FIREBASE_API_KEY: apiKey,
  REACT_APP_FIREBASE_AUTH_DOMAIN: authDomain,
  REACT_APP_FIREBASE_PROJECT_ID: projectId,
  REACT_APP_FIREBASE_STORAGE_BUCKET: storageBucket,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID: messagingSenderId,
  REACT_APP_FIREBASE_APP_ID: appId,
} = process.env;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </StrictMode>,
);
