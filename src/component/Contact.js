import { Container, makeStyles, Typography, Divider, IconButton, Link, Button, useTheme, useMediaQuery } from '@material-ui/core';
import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        backgroundColor: 'black',
        height: '50vh',
        textAlign: 'center',
        padding: '3rem 0',
        [theme.breakpoints.down('xs')]: {
            padding: '2rem 1rem',
            height: 'auto',
            // paddingBottom: '3rem'
        }

    },
    header: {
        color: 'white',
        fontSize: '3rem',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
        }
    },
    icon: {
        color: 'white',
        alignItems: 'center',
        marginRight: '1rem',
        [theme.breakpoints.down('xs')]: {
            marginRight: '0.5rem',
        }
    },
    link: {
        fontSize: '2rem',
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
            textDecoration: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        }
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrow: {
        position: 'absolute', right: 70, top: 80
    }
}))
function About({ scrollTo }) {
    const classes = useStyles()
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <Container maxWidth={mobileView ? 'xs' : 'xl'} className={classes.container}>
            <Typography className={classes.header}>Contact With Me</Typography>
            <br />
            <div className={classes.button}>
                <MailOutlineIcon className={classes.icon} fontSize={mobileView ? 'small' : 'large'} />
                <Link className={classes.link} href='mailto:lidor110110@gmail.com'>
                    lidor110110@gmail.com
                </Link>
            </div>
            <br />
            <div className={classes.button} >
                <PhoneIphoneIcon className={classes.icon} fontSize={mobileView ? 'small' : 'large'} />
                <Link className={classes.link} href='tel:0548098038'>
                    0548098038
                </Link>
            </div>

            {!mobileView && <IconButton className={classes.arrow} onClick={() => scrollTo('Home')} size='medium'>
                <ArrowUpwardIcon fontSize='large' style={{ color: 'white' }} />
            </IconButton>}
        </Container>
    );
}

export default About;