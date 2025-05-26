import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import Button from './components/RemoteButton';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <>
      <p>You are running in the remote app.</p>
      <Button />
    </>
  </StrictMode>
);
