import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';
import store, { persistor } from './store';

const App: React.FC = () => {
  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        primary: {
          main: '#47CDFF',
        },
        secondary: {
          main: '#47CDFF',
        },
      },
    }),
    [],
  );

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes />
          </Router>
        </PersistGate>
        <ToastContainer />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
