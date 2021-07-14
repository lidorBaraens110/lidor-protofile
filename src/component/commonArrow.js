import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const useStyles = makeStyles(theme => ({
    container: {
        position: 'absolute',
        // padding: '5rem',
        height: '100%',
        top: '0',
        right: 70
    },
    centerDiv: {
        display: 'flex',
        // padding: '5rem 0 30rem',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: '100%',
    },
    topIcon: {
        marginTop: '5rem'
    },
    bottomIcon: {
        marginBottom: '5rem'
    }
}))
function CommonArrow({ topClick, bottomClick }) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.centerDiv}>
                <IconButton onClick={topClick} size='medium' className={classes.topIcon}>
                    <ArrowUpwardIcon fontSize='large' />
                </IconButton>
                <IconButton onClick={bottomClick} className={classes.bottomIcon}>
                    <ArrowDownwardIcon fontSize='large' />
                </IconButton>
            </div>
        </div>
    );
}

export default CommonArrow;