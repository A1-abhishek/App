import React, { useState } from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, TextField, Grid } from '@mui/material';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Card1 from './Card1';
import { InputBase } from '@mui/material';
import { Search as SearchIcon2 } from '@mui/icons-material';


const drawerWidth = 240;

const cardData = [
  {
    title: 'Tomato',
    image: 'https://plus.unsplash.com/premium_photo-1708971732799-649f5526ad73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Tomatoes are a rich source of vitamins and minerals.'
  },
  {
    title: 'Apple',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=1080',
    description: 'Apples are nutritious and good for health.'
  },
  {
    title: 'Banana',
    image: 'https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=oOYi2BEZWJJxWxFNBii7sWCxt6iY7RyGksBHCpU620E=',
    description: 'Bananas are rich in potassium and provide instant energy.'
  },
  {
    title: 'Apple',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=1080',
    description: 'Apples are nutritious and good for health.'
  },
  {
    title: 'Banana',
    image: 'https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=oOYi2BEZWJJxWxFNBii7sWCxt6iY7RyGksBHCpU620E=',
    description: 'Bananas are rich in potassium and provide instant energy.'
  },
  {
    title: 'Apple',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=1080',
    description: 'Apples are nutritious and good for health.'
  },
  {
    title: 'Banana',
    image: 'https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.jpg?s=2048x2048&w=is&k=20&c=oOYi2BEZWJJxWxFNBii7sWCxt6iY7RyGksBHCpU620E=',
    description: 'Bananas are rich in potassium and provide instant energy.'
  },
  {
    title: 'Tomato',
    image: 'https://plus.unsplash.com/premium_photo-1708971732799-649f5526ad73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Tomatoes are a rich source of vitamins and minerals.'
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: 'blur(10px)',
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        backgroundColor: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: 'blur(10px)',
      },
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredCards = cardData.filter(card =>
    card.title.toLowerCase().includes(query)
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline /> 
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My Application
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 50, p:0.1 }}>
          
         <IconButton color="inherit" aria-label="search">
            <SearchIcon2 sx={{  }}/>
 	        </IconButton>
 	       <InputBase   
         onChange={handleInputChange}  placeholder="Search..." sx={{ borderRadius:4, padding:0.5, color: 'inherit', border:'1px solid #88b2dd', width:500 }} />
           
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: 32.6 }} />
        <List>
          {['My Profile'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    fontSize: 28,
                  }}
                >
                  <AccountCircleTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexWrap: 'wrap' }}>
        <Grid container spacing={3}>
          {filteredCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card1 title={card.title} image={card.image} description={card.description} />
            </Grid>
          ))}
        </Grid>
      
      </Box>
    </Box>
  );
}
