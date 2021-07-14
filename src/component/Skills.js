import React from 'react';
import { Container, makeStyles, Typography, Card, CardHeader, CardContent, useTheme, useMediaQuery, Divider, Grid } from '@material-ui/core';
import CommonArrow from './commonArrow';

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        backgroundColor: '#564787',
        height: '100vh',
        padding: '3rem 5rem',
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
            padding: '1rem'
        }
    },
    root: {
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    card: {
        width: '25vw',
        padding: '2rem',
        backgroundColor: '#f1f1f1',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
            padding: '1rem'
        }
    },
    header: {
        color: '#f1f1f1',
        textDecoration: 'underLine',
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
        }
    },
    cardTitle: {
        fontSize: '2rem',
        fontWeight: '500',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem',
            fontWeight: '600',
        }
    },
    freeText: {
        fontSize: '1.4rem',
        lineHeight: 1.5,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            textAlign: 'center'
        }

    },
    gridContainer: {
        margin: 0,
        maxWidth: '100%'
    },
    secGrid: {
        marginTop: '1rem'
    }
}))
function Skills({ scrollTo }) {
    const classes = useStyles()
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <Container maxWidth={mobileView ? 'xs' : 'xl'} className={classes.container}>
            <Typography className={classes.header}>Skills</Typography>
            {/* <div className={classes.root}> */}
            <Grid container space={10} className={classes.gridContainer}><Grid item
                xs={12} sm={6} lg={6} md={6} xl={6}>
                <Card className={classes.card}>
                    <Typography className={classes.cardTitle}>FRONT-END</Typography>
                    <Divider />
                    <CardContent className={classes.freeText}>
                        HTML,
                        <br />
                        CSS,
                        <br />
                        JavaScript,<br />
                        React.js, <br />
                        React-Native,<br />
                        Redux,<br />
                        rest-API,<br />
                        Responsive-UI,<br />
                        Firebase
                    </CardContent>
                </Card>
            </Grid>
                <Grid item
                    xs={12} sm={6} lg={6} md={6} xl={6} className={mobileView && classes.secGrid}>
                    <Card className={classes.card}>
                        <Typography className={classes.cardTitle}>BACK-END</Typography>
                        <Divider />
                        <CardContent className={classes.freeText}>
                            Node.js, <br />
                            Express, <br />
                            Mongo DB, <br />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {/* </div> */}
            {!mobileView && <CommonArrow
                topClick={() => scrollTo('About')}
                bottomClick={() => scrollTo('Projects')} />
            }
        </Container >
    );
}

export default Skills;

// const Card =()=>{
//     Card
// }