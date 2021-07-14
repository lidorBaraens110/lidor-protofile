import { Container, makeStyles, Typography, Divider, useTheme, useMediaQuery } from '@material-ui/core';
import React from 'react';
import CommonArrow from './commonArrow';

const useStyles = makeStyles(theme => ({
    container: {
        position: 'relative',
        backgroundColor: '#f1f1f1',
        height: '100vh',
        display: 'flex',
        padding: '5rem 0',
        [theme.breakpoints.down('xs')]: {
            padding: '1rem'
        }
    },
    leftDiv: {
        flex: 2,
        padding: '0 5rem',
        [theme.breakpoints.down('xs')]: {
            padding: '1rem'
        }

    },
    header: {
        textDecoration: 'underLine',
        fontSize: '3rem',
        fontWeight: 'bold',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
            marginBottom: '1rem'
        }
    },
    freeText: {
        fontSize: '1.5rem',
        lineHeight: 1.5,
        color: '#003',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        }
    },
    rightDiv: {
        position: 'relative',
        flex: 1
    },
}))
function About({ scrollTo }) {
    const classes = useStyles()
    const theme = useTheme();
    const mobileView = useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <Container maxWidth={mobileView ? 'xs' : 'xl'} className={classes.container}>
            <div className={classes.leftDiv}>
                <Typography className={classes.header} >About</Typography>
                <Typography className={classes.freeText}>
                    Hello my name is lidor, I'm 27 years old
                    <br />
                    and I'm Full-Stack developer.
                    <br />
                    I have passionate about exploring new technologies.
                    <br />
                    Dedicated team player with exceptional communication skills.
                    <br />
                    Creativity, motivation, high self-learning ability.
                    <br />
                    Great willingness to invest, ability to work in flexible hours and under stress conditions.
                    <br />
                    I took several courses at udemy,
                    <br />
                    I did a course at SvCollege College,
                    <br />
                    And I gained a lot of knowledge through deep reading on the internet and instructional videos
                </Typography>
            </div>
            {!mobileView && <div className={classes.rightDiv} />}
            {!mobileView && <CommonArrow
                topClick={() => scrollTo('Home')}
                bottomClick={() => scrollTo('Skills')}

            />}
        </Container>
    );
}

export default About;