import { TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import SearchIcon from "@mui/icons-material/Search"
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import CustomPagination from '../../CustomPagination/CustomPagination';
import SingleContent from '../../SingleContent/SingleContent';
import Tab from '@mui/material/Tab';
import axios from 'axios';

const Search = () => {

    const [type, settype] = useState(0);
    const [page, setpage] = useState(1);
    const [searchText, setsearchText] = useState("");
    const [content, setcontent] = useState([]);
    const [numberofPages, setnumberofPages] = useState();

    //fetch api using searched text
    const fetchSearch = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY
            }&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
        setcontent(data.results);
        setnumberofPages(data.total_pages);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page]);

    return (
        <>
            <div style={{ display: "flex", padding: "18px 0" }}>
                <TextField
                    style={{ flex: 1 }}
                    className="searchBox"
                    label="Search"
                    variant="filled"
                    onChange={(e) => setsearchText(e.target.value)}
                />
                <Button variant='contained' style={{ marginLeft: "10px" }} onClick={fetchSearch} ><SearchIcon /></Button>
            </div>
            <Tabs value={type} indicatorColor="primary" textColor="primary" onChange={(event, newValue) => { settype(newValue); setpage(1) }} >
                <Tab style={{ width: "50%" }} label="Search Movies" />
                <Tab style={{ width: "50%" }} label="Search TV/Series" />
            </Tabs>
            <div className="trending" style={{ marginTop: "15px" }}>
                {
                    content && content.map((elm) => {
                        return <SingleContent key={elm.id} id={elm.id} poster={elm.poster_path} title={elm.title || elm.name} date={elm.first_air_date || elm.release_date} media_type={type ? "tv" : "movie"} rating={elm.vote_average} />
                    })
                }
                {searchText && !content && (type ? <h2 style={{ color: "black" }}>No Series Found</h2> : <h2 style={{ color: "black" }}>No Movies Found</h2>)}
            </div>
            {numberofPages > 1 && (<CustomPagination count={numberofPages} setpage={setpage} />)}
        </>
    )
}

export default Search
