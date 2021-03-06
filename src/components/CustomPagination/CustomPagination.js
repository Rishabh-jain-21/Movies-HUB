import React from 'react'
import Pagination from '@mui/material/Pagination';

const CustomPagination = (props) => {
    const handlePageChanger = (page) => {
        props.setpage(page);
        window.scroll(0, 0);
    }
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <Pagination count={props.count} onChange={(e) => handlePageChanger(e.target.textContent)} hideNextButton hidePrevButton style={{ color: "#483434" }} color={'primary'} />
            {/* text content is the content of the text that is currently selected */}
        </div>
    )
}

export default CustomPagination
