import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: theme.palette.info.light,
    }
}));


export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Link to="/"><div><h3>Back</h3></div></Link>
            <h1>Work</h1>
            <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={12} md={6} lg={3}>
                    <Paper className={classes.paper}>1</Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Paper className={classes.paper}>1</Paper>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Paper className={classes.paper}>1</Paper>
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                    <Paper className={classes.paper}>1</Paper>
                </Grid>
            </Grid>
        </div>
    );
}