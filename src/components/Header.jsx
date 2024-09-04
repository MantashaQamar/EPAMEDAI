import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  Button,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { styled } from '@mui/system';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import icon from '../assets/smallicons/energy.svg';
import bellIcon from '../assets/smallicons/bell.svg'; 
import profileIcon from '../assets/smallicons/profile.svg'; 

// Styled components
const StyledAppBar = styled(AppBar)(() => ({
  background: '#FFFFFF',
  boxShadow: 'none',
  borderBottom: '1px solid #E0E0E0',
}));

const Logo = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}));

const NavItem = styled(Typography)(({ theme, isActive }) => ({
  color: '#323A3A',
  cursor: 'pointer',
  marginRight: theme.spacing(3),
  position: 'relative',
  textDecoration: 'none', // Remove any default underline
  padding: '0px 0px 8px 0px', // Padding for space below the text
  height: '32px',
  whiteSpace: 'nowrap', // Prevent text from wrapping
  '&::after': {
    content: '""',
    display: isActive ? 'block' : 'none',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%', // Adjust width dynamically
    height: '2px',
    backgroundColor: '#9EF300',
    transition: 'width 0.3s ease', // Smooth transition for width change
  },
}));

export default function Header() {
  const navigateTo = useNavigate();
  const { pathname } = useLocation();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isActive = (path) => pathname === path;

  return (
    <StyledAppBar position='static'>
      <Toolbar>
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 5, flexGrow: 1 }}
        >
          <Logo>
            <img
              src={icon}
              alt='EnergyX Icon'
              style={{ width: '24px', height: '24px' }}
            />
            <Typography variant='h6' component='div' sx={{ color: '#323A3A' }}>
              EnergyX
            </Typography>
          </Logo>
          <Box>
            <NavItem component={Link} to='/dashboard' isActive={isActive('/dashboard')}>
              Workouts
            </NavItem>
            <NavItem component={Link} to='/coaches' isActive={isActive('/coaches')}>
              Coaches
            </NavItem>
          </Box>
        </Box>
        <Box>
          <IconButton color='inherit'>
            <img src={bellIcon} alt='Notifications' style={{ width: '24px', height: '24px' }} />
          </IconButton>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <img src={profileIcon} alt='Profile' style={{ width: '24px', height: '24px' }} />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Box sx={{ px: 3, py: 2 }}>
              <Box sx={{ textAlign: 'center' }}>
                <div>Johnson Doe</div>
                <small>johnsondoe@nomail.com</small>
              </Box>
             
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  handleCloseUserMenu();
                  navigateTo('/account');
                }}
              >
                <TuneIcon />
                <div>
                  <div>My Account</div>
                  <small>Edit Account Profile</small>
                </div>
              </Box>
             
              <Box sx={{ textAlign: 'center' }}>
                <Button variant='outlined' fullWidth>
                  Logout
                </Button>
              </Box>
            </Box>
          </Menu>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
