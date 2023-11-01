import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Divider, InputBase, Paper } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import './Header.css';
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import Swal from 'sweetalert2';
import Tooltip from '@material-ui/core/Tooltip';
import CartCount from "./CartCount";

function Header() {
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    let navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleProfileOpen = () => {
        navigate(`/profile`);
    }

    const handleSearchOpen = () => {
        setSearchOpen(!searchOpen);
    }

    const handleFavouritesOpen = () => {
        alert("Favourites clicked");
    }

    const handleCartOpen = () => {  
        navigate(`/cart`); 
    }

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate(`/`);
                window.history.replaceState(null, null, '/');
                console.log("sign out successful");
                Swal.fire({
                    icon: 'success',
                    title: `Signed Out Successfully`,
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    },
                });

            })
            .catch((error) => console.log(error));
    }
    const handleItemsSearch = (e) => {
        e.preventDefault();
        console.log("Searched Item : ", searchValue)
    }

    return (
        <div className="main-header">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}><MenuIcon /></IconButton>
                    <Typography variant="h6" className='header-heading'><img src={`${process.env.PUBLIC_URL}/assets/beyond-logo.jpg`} />Beyond Label</Typography>
                    <div className='header-right-toolbar'>
                        <Tooltip title="User Profile" arrow>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleProfileOpen}><PersonOutlinedIcon /></IconButton>
                        </Tooltip>
                        <Tooltip title="Search Items" arrow>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleSearchOpen}><SearchIcon /></IconButton>
                        </Tooltip>
                        <Tooltip title="Favourites" arrow>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleFavouritesOpen}><FavoriteBorderOutlinedIcon /></IconButton>
                        </Tooltip>
                        <Tooltip title="Cart" arrow>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleCartOpen}><ShoppingCartOutlinedIcon /><CartCount /></IconButton>
                        </Tooltip>
                        <Tooltip title="Logout" arrow>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleLogout}><ExitToAppOutlinedIcon /></IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer open={open} variant="temporary" anchor="left">
                <div>
                    <Tooltip title="Close" arrow>
                        <IconButton onClick={handleDrawerClose}><ChevronLeftIcon /></IconButton>
                    </Tooltip>
                </div>
                <Divider />
                <List>
                    <ListItem button component={Link} to="/profile">
                        <Tooltip title="User Profile" arrow>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleProfileOpen}><PersonOutlinedIcon /></IconButton>
                        </Tooltip>
                    </ListItem>
                    <ListItem button component={Link} to="/home"><ListItemText primary="Home" /></ListItem>
                    <ListItem button component={Link} to="/cart"><ListItemText primary="Cart" /><CartCount /></ListItem>
                    <ListItem button component={Link} to="/services"><ListItemText primary="Services" /></ListItem>
                    <ListItem button component={Link} to="/contact"><ListItemText primary="Customer Support" /></ListItem>
                </List>
            </Drawer>
            {searchOpen && (
                <Paper component="form" className="search-bar">
                    <InputBase placeholder="Search..." value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)} fullWidth />
                    <Tooltip title="Search" arrow>
                        <IconButton type="submit" color="primary" aria-label="search" onClick={(e) => handleItemsSearch(e)}>
                            <SearchIcon />
                        </IconButton>
                    </Tooltip>
                </Paper>
            )}
        </div>
    );
}

export default Header;
