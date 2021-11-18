import * as React from 'react';
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from "@mui/material/Button"
import Typography from '@mui/material/Typography';
import "./ContentModal.css"
import axios from 'axios';
import { img_500, unavailableLandscape, unavailable } from '../components/Config/Config';
import { YouTube } from '@material-ui/icons';
import 'react-alice-carousel/lib/alice-carousel.css';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    bgcolor: '#EED6C4',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: "80%",
    borderRadius: "10px",
    color: "#483434",
};

export default function ContentModal({ children, media_type, id }) {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState([]);
    const [video, setVideo] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //fetching data from api
    const fetchData = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setContent(data);
    }

    // fetching video data shown for trailer
    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        // console.log(data);
        setVideo(data.results[0]?.key);
    };

    // calling fetching functions
    useEffect(() => {
        fetchData();
        fetchVideo();
    }, [])
    return (
        <>
            <div onClick={handleOpen} className="media" >{children}</div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {content && <Typography>
                            <div className="ContentModal">
                                <img className="ContentModal_portrait" src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable} alt={content.name || content.title} ></img>
                                {console.log("portraint picture ", content.poster_path)}
                                <img className="ContentModal_landscape" src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape} alt={content.name || content.title} ></img>
                                {console.log("Landscape picture ", content.backdrop_path)}

                                <div className="ContentModal_about">
                                    <span className="ContentModal_title">
                                        {content.name || content.title}(
                                        {(content.first_air_date || content.release_date || "-----").substring(0, 4)}
                                        )
                                    </span>
                                    {
                                        content.tagline && (
                                            <i className="tagline">{content.tagline}</i>
                                        )
                                    }
                                    <span className="ContentModal_description">{content.overview}</span>

                                    <Button
                                        variant="contained"
                                        startIcon={<YouTube />}
                                        color="secondary"
                                        target="__blank"
                                        href={`https://www.youtube.com/watch?v=${video}`}
                                    >
                                        Watch Trailer
                                    </Button>
                                </div>
                            </div>
                        </Typography>}
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}