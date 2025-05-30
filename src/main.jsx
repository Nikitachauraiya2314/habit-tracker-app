import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
          <ToastContainer position="top-center" />

    <Provider store={store}>
      <App/>
    </Provider>

  </StrictMode>,
)
