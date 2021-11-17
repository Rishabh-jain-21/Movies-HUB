import axios from 'axios';
import React, { useEffect } from 'react'
import Chip from '@mui/material/Chip';

const Genres = (props) => {

    const handleAdd = (elm) => {
        // console.log("function handle add ");
        props.setselectedgenres([...props.selectedgenres, elm]);
        props.setgenres(props.genres.filter((g) => g.id !== elm.id));
        props.setPage(1);
    }

    const handleRemove = (elm) => {
        // console.log("function handle add ");
        props.setselectedgenres(props.selectedgenres.filter((g) => g.id !== elm.id));
        props.setgenres([...props.genres, elm]);
        props.setPage(1);
    }

    const fetchGenres = async () => {
        //Generes api 
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${props.type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        // console.log(data);
        props.setgenres(data.genres);
    }
    useEffect(() => {
        fetchGenres();

        return () => {
            props.setgenres({});
            // eslint-disable-next-line
        };
    }, [])
    return (

        <div style={{ padding: "6px 0px", }}>

            {
                props.selectedgenres && (props.selectedgenres.map((elm) => {
                    return <Chip label={elm.name} style={{ margin: "2px" }} onDelete={() => handleRemove(elm)} size="small" key={elm.id} color="primary" clickable />
                })
                )
            }

            {
                props.genres && (props.genres.map((elm) => {
                    return <Chip label={elm.name} style={{ margin: "2px" }} onClick={() => handleAdd(elm)} size="small" key={elm.id} clickable />
                })
                )
            }

        </div>

    );
}

export default Genres