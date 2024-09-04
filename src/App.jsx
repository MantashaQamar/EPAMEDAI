import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import MyAccount from './components/MyAccount';
import Home from './components/Home';
import Coaches from './components/Coaches'; 

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Lexend, sans-serif',
  },
  palette: {
    primary: {
      main: '#B8FF3B', // Neon green color from the design
    },
    background: {
      default: '#ffffff', // White background for the whole app
    },
    text: {
      primary: '#000000', // Black primary text color
      secondary: '#757575', // Grey secondary text color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />}>
            <Route index element={<Navigate to='/dashboard' />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/account' element={<MyAccount />} />
            <Route path='/coaches' element={<Coaches />} /> 
          </Route> 
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
