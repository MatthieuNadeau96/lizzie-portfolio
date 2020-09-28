import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, ButtonBase } from '@material-ui/core';
import projects from '../data/projects';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: '#ffffff',
    },
    img: {
        width: 200,
        height: 200,
    }
}));



export default function Work() {
    const classes = useStyles();
    const projectsList = projects.map((project, index) => {
        return (
            <Grid key={index} item xs={12} md={6} lg={3}>
                <Paper className={classes.paper}>
                    <ButtonBase>
                        <img className={classes.img} alt='project' src={project.image} />
                    </ButtonBase>
                </Paper>
            </Grid>
        )
    })

    return (
        <div>
            <Link to="/"><div><h3>Back</h3></div></Link>
            <h1>Work</h1>
            <Grid container spacing={2} className={classes.grid}>
                {projectsList}
            </Grid>
        </div>
    );
}