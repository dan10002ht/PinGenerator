import './styles/app.scss';
import Routing from './routes/Routing';
import {ThemeProvider, createTheme} from '@mui/material';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#008060',
      },
      secondary: {
        main: '#FFFFFF',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
};

export default App;
