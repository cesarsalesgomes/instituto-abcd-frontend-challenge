import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';

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
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
