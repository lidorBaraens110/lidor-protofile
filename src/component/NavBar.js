import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, Divider, List, ListItem, ListItemText, IconButton, useTheme, useMediaQuery, Drawer } from '@material-ui/core';
import ProfileImg from '../assets/profileImg.jpeg';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    root: {
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        height: 'calc(100%+3px)',
        position: 'relative',
        '& Button': {
            zIndex: 10,
            color: 'white',
            fontSize: '1.5rem',
            padding: ' 1rem',
            margin: '1rem 0',
            borderBottom: '3px solid transparent',
            borderRadius: 0,
            '&:hover': {
                color: 'orange',
                borderBottom: '3px solid orange'
            },
        },

    },
    container: {
        boxSizing: 'border-box',
        zIndex: 1,
        maxWidth: '100%',
        backgroundColor: '#003',
        height: '6rem',
        borderBottom: '1px solid white',
    },
    leftNavBar: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    typography: {
        fontSize: '1.5rem'
    },
    img: {
        borderRadius: '100%',
        height: '5rem',
        width: 'auto',
        padding: '0.5rem'
    },
    toolbar: {
        position: 'relative',
        height: '100%',
    },
    MenuIcon: {

        color: 'white'
    },
    wrapIcon: {
        flex: 1,
        textAlign: 'right'
    },
    // drawer: {
    //     width: '250px'
    // }
    // list: {
    //     width: '30px'
    // },
    drawer: {
        width: '120px'
    },
    typography: {
        color: '#003',
        textAlign: 'center',
        fontWeight: '600'
    },
    Wtyp: {
        borderRadius: '100%',
        backgroundColor: '#f1f1f1',
        height: '5rem',
        width: '5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
}))
function NavBar({ scroll }) {
    const [open, setOpen] = useState();
    const handleDrawer = (f) => {
        setOpen(f)
    }
    const classes = useStyles();
    const theme = useTheme()
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'));

    const scrollAndCloseDrawer = (e) => {
        scroll(e)
    }
    return (
        <>
            <Drawer classes={{ paper: classes.drawer }} open={open} onClose={() => handleDrawer(false)} anchor='right'>
                <List className={classes.list}>
                    <ListItem button onClick={() => scrollAndCloseDrawer('Home')}>
                        <ListItemText>Top</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => scrollAndCloseDrawer('About')}>
                        <ListItemText>About</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => scrollAndCloseDrawer('Skills')}>
                        <ListItemText>Skills</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => scrollAndCloseDrawer('Projects')}>
                        <ListItemText>Project</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => scrollAndCloseDrawer('Contact')}>
                        <ListItemText>Contact</ListItemText>
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
            <AppBar position={mobileView ? 'sticky' : 'static'} className={classes.container}>
                <Toolbar className={classes.toolbar}>
                    {mobileView ? <>
                        <div className={classes.Wtyp}>
                            <Typography className={classes.typography} >Lidor
                                <br />
                                Baranes</Typography>
                        </div>
                        <div className={classes.wrapIcon} >
                            <IconButton className={classes.MenuIcon} onClick={() => handleDrawer(true)}>
                                <MenuIcon fontSize='large' />
                            </IconButton>
                        </div>
                    </>
                        :
                        <>
                            <div className={classes.leftNavBar}>
                                <img src={ProfileImg} className={classes.img} />
                            </div>
                            <div className={classes.root}>
                                <Button onClick={() => scroll('About')}>
                                    About
                                </Button>
                                <Button onClick={() => scroll('Skills')}>
                                    Skills
                                </Button>
                                <Button onClick={() => scroll('Projects')}>
                                    Project
                                </Button>
                                <Button onClick={() => scroll('Contact')}>
                                    Contact
                                </Button>
                            </div>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;