import React from 'react';
import { Container, makeStyles, Typography, IconButton, useTheme, Link, useMediaQuery, Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import ProfileImg from '../assets/profileImg.jpeg';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#003',
        height: 'calc(100vh - 6rem)',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    leftSide: {
        padding: '5rem',
        textAlign: 'center',
        flex: 1,
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'space-evenly',
            padding: '1rem',
        }
    },
    title: {
        fontWeight: 'bold',
        fontSize: '4rem',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5rem'
        }
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: '2rem',
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem'
        }
    },
    rightSide: {
        flex: 1,
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        textAlign: 'right',
        paddingTop: '5rem',
        paddingRight: '2rem',
        [theme.breakpoints.down('xs')]: {
            paddingRight: '0',
            paddingTop: '2rem',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    button: {
        borderRadius: '14px 14px',
        backgroundColor: 'orange',
        color: 'white',
        padding: '1rem 2rem',
        marginTop: '1rem',
        fontSize: '1rem',
        fontWeight: '700',
        '&:hover': {
            backgroundColor: '#d3d3d3',
            color: 'black'
        }
    },
    iconButton: {
        color: '#d3d3d3',
        marginBottom: '2rem',
        '&:hover': {
            color: 'orange'
        }
    },
    wrapImg: {
        flex: 1, height: '6rem', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    img: {
        height: '100%', width: 'auto', borderRadius: '50% '
    }
}))


function Home(props) {
    const classes = useStyles();
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Container maxWidth={mobileView ? 'xs' : 'xl'} className={classes.container}>
            <div className={classes.leftSide} >
                <Typography className={classes.title}>Lidor Baranes</Typography>
                <Typography className={classes.subTitle}>Full Stack Developer</Typography>
                <Link href='https://firebasestorage.googleapis.com/v0/b/e-commerce-83126.appspot.com/o/lidor%20resume.pdf?alt=media&token=920e33ab-a946-44a7-acf9-ea7f3a5a4e93'>
                    <Button className={classes.button}>
                        Download CV
                    </Button>
                </Link>

            </div>
            {mobileView &&
                <div className={classes.wrapImg}>
                    <img src={ProfileImg} className={classes.img} />
                </div>
            }
            <div className={classes.rightSide}>
                <IconButton href='https://www.linkedin.com/in/lidor-baranes-6676941a0/' className={classes.iconButton} ><LinkedInIcon fontSize='large' /> </IconButton>
                <IconButton href='https://github.com/lidorBaraens110' className={classes.iconButton}><GitHubIcon fontSize='large' /> </IconButton>

            </div>
        </Container>
    );
}

export default Home;