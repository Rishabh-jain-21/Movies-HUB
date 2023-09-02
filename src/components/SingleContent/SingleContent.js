import React from 'react'
import "./SingleContent.css"
import Badge from '@mui/material/Badge';
import { img_300, unavailable } from '../Config/Config'
import ContentModal from '../../ContentModal/ContentModal';
const SingleContent = (props) => {
    return (
        <ContentModal media_type={props.media_type} id={props.id}>
            <Badge badgeContent={props.rating.toFixed(2)} color={props.rating > 6 ? 'primary' : 'secondary'} />
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
        </ContentModal>
    )
}

export default SingleContent
