import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SingleContent from "../../SingleContent/SingleContent"
import "./Trending.css"
import CustomPagination from '../../CustomPagination/CustomPagination'

const Trending = () => {
    const [page, setpage] = useState(1);
    const [content, setcontent] = useState([]);

    const fetchTrendingData = async () => {
        //destructuring data from the fecthed data
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        console.log(data.results);
        setcontent(data.results);
    }

    useEffect(() => {
        fetchTrendingData();
    }, [page]);
    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
                {
                    content && content.map((elm) => {
                        return <SingleContent key={elm.id} id={elm.id} poster={elm.poster_path} title={elm.title || elm.name} date={elm.first_air_date || elm.release_date} media_type={elm.media_type} rating={elm.vote_average} />
                    })
                }
            </div>
            <CustomPagination setpage={setpage} />
        </div>
    )
}

export default Trending
