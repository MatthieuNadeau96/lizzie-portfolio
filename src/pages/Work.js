import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, ButtonBase } from '@material-ui/core';
import projects from '../data/projects';
import Modal from '../components/Modal';

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
        objectFit: 'cover',
    }
}));


// openModal(image, description) {

// }



export default function Work() {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const closeModalHandler = () => setShow(false);
    const projectsList = projects.map((project, index) => {
        return (
            <Grid key={index} item xs={12} md={6} lg={3}>
                <Paper className={classes.paper}>
                    <ButtonBase onClick={() => {
                        setInfo(project.description);
                        setImage(project.image);
                        setTitle(project.title);
                        setShow(true);

                    }}>

                        <img className={classes.img} alt='project' src={project.image} />
                    </ButtonBase>
                </Paper>
            </Grid>
        )
    })

    return (
        <div>
            {show ? <div onClick={closeModalHandler} className='back-drop'></div> : null}
            <Link to="/"><div><h3>Back</h3></div></Link>
            <h1>Work</h1>
            <Grid container spacing={2} className={classes.grid}>
                {projectsList}
            </Grid>
            <Modal show={show} close={closeModalHandler} description={info} image={image} title={title} />
        </div>
    );
}