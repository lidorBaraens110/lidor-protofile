import React from 'react';
import { Container, makeStyles, Typography, Card, Grid, Link, Button, useTheme, useMediaQuery, CardHeader, CardContent, Divider, CardMedia } from '@material-ui/core';
import CommonArrow from './commonArrow';
import { data } from '../data';

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        backgroundColor: '#d3d3d3',
        height: '100%',
        padding: '2rem 5rem 10rem',
        [theme.breakpoints.down('xs')]: {
            padding: '1rem'
        }
    },
    gridContainer: {
        margin: 0,
        maxWidth: '100%'
    },
    root: {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    card: {
        height: '70vh',
        padding: '2rem',
        backgroundColor: '#f1f1f1',
        borderRadius: 0,
        [theme.breakpoints.down('xs')]: {
            padding: '1rem',
            height: 'auto'
        }
    },

    header: {
        color: 'black',
        textDecoration: 'underLine',
        fontSize: '3rem',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
        }
        // marginBottom: '1rem'
    },

    title: {
        fontSize: '1.2rem',
        fontWeight: '600',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        }
    },
    img: {
        width: '100%',
        height: 'auto',
        margin: '1rem 0',

    },
    button: {
        backgroundColor: 'orange'
    },
    link: {
        textDecoration: 'none',
        fontWeight: '600',
        '&:hover': {
            textDecoration: 'none'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }
    },
    linkDis: {
        textDecoration: 'none',
        fontWeight: '600',
        '&:hover': {
            textDecoration: 'none'
        },
        color: 'white'
    },
    wrapImg: {
        height: '40vh',
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
        }
    },
    wrapDiv: {
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    tech: {
        height: '3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem',
        }
    },
    buttonDis: {
        backgroundColor: 'gray',
        // color: 'white'
    },
    gridItem: {
        marginTop: '1rem'
    },
    subTitle: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }
    },
    type: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        }
    }
}))
function Projects({ scrollTo }) {
    const classes = useStyles()
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <Container maxWidth={mobileView ? 'sm' : 'xl'} className={classes.container}>
            <Typography className={classes.header}>Projects</Typography>
            <Grid container spacing={!mobileView && 10} className={classes.gridContainer}>
                {data.map((d, i) => {
                    return <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.gridItem}>
                        <Card className={classes.card}>
                            <Typography className={classes.title}>
                                {d.name}
                            </Typography>
                            <Typography className={classes.subTitle}>
                                {d.subTitle}
                            </Typography>
                            <Typography className={classes.type}>
                                {d.type}
                            </Typography>
                            <div className={classes.wrapImg}>
                                <img src={d.img} className={classes.img} />
                            </div>
                            <Typography className={classes.tech}>
                                <strong>Technologies:</strong> {d.tech}
                            </Typography>
                            <div className={classes.wrapDiv}>
                                <Button disabled={d.webUrl ? false : true} className={d.webUrl ? classes.button : classes.buttonDis}>
                                    <Link className={d.webUrl ? classes.link : classes.linkDis} target="_blank" href={d.webUrl}>{d.webUrl ? 'website' : 'upload soon'}</Link>
                                </Button>
                                <Button className={classes.button}>
                                    <Link className={classes.link} target="_blank" href={d.gitUrl}>code</Link>
                                </Button>
                            </div>
                        </Card>
                    </Grid>
                })}
            </Grid>
            {!mobileView && <CommonArrow
                topClick={() => scrollTo('Skills')}
                bottomClick={() => scrollTo('Contact')} />}
        </Container >
    );
}

export default Projects;

// const Card =()=>{
//     Card
// }