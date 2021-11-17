import React from 'react'
import "./SingleContent.css"
import Badge from '@mui/material/Badge';
import { img_300, unavailable } from '../Config/Config'
const SingleContent = (props) => {
    return (
        <div className="media">
            <Badge badgeContent={props.rating} color={props.rating > 6 ? 'primary' : 'secondary'} />
            <img className="poster" src={props.poster ? `${img_300}/${props.poster}` : unavailable} alt={props.title} />
            <span className="bottom-Container">
                <b className="title">{props.title}</b>
                <span className="sub-title-Container">
                    <span className="sub-title">
                        {props.media_type === "tv" ? "Series" : "Movies"}
                    </span>
                    <span className="sub-title">{props.date}</span>
                </span>
            </span>
        </div>
    )
}

export default SingleContent
