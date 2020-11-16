import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '20%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    },
    img: {
        height: '100%',
        width: '100%',
        margin: '0 auto',
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
    }
}));

export default function SimpleModal({ show, close, description, image, title, image1, image2, image3, image4, image5, image6, image7, image8, image9, }) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { red, blue, green } = require('@material-ui/core/colors');
    const Button = require('@material-ui/core/Button').default;

    const body = image == undefined ? (
        <div style={{ position: 'relative', width: '100%', height: 500 }}>
            <AutoRotatingCarousel
                label='Get started'
                style={{ position: 'absolute' }}
            >
                <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
                    mediaBackgroundStyle={{ backgroundColor: red[400] }}
                    style={{ backgroundColor: red[600] }}
                    title='This is a very cool feature'
                    subtitle='Just using this will blow your mind.'
                />
                <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
                    mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                    style={{ backgroundColor: blue[600] }}
                    title='Ever wanted to be popular?'
                    subtitle='Well just mix two colors and your are good to go!'
                />
                <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
                    mediaBackgroundStyle={{ backgroundColor: green[400] }}
                    style={{ backgroundColor: green[600] }}
                    title='May the force be with you'
                    subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
                />
            </AutoRotatingCarousel>
        </div>

    ) : <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">{title}</h2>
            <img className={classes.img} alt='project' src={image} />
            <p id="simple-modal-description">
                {description}
            </p>
            <SimpleModal />
        </div>




    return (

        <div>
            <Modal
                open={show}
                onClose={close}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}