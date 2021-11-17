import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CustomPagination from '../../CustomPagination/CustomPagination';
import SingleContent from '../../SingleContent/SingleContent';
import useGenres from '../../../Hooks/useGenres';
import Genres from '../../Genres';
import "./Series.css"

const Series = () => {
    //defining states
    const [page, setpage] = useState(1);
    const [content, setcontent] = useState([]);
    const [numberOfPages, setnumberOfPages] = useState(1);
    // normally i m taking two arrays one which contain all genres and one which is empty at start once user selects any genres ,
    // it is shifted to the another array which contain selected genre , and render them first
    const [genres, setgenres] = useState([]);
    const [selectedgenres, setselectedgenres] = useState([]);
    const genreforURL = useGenres(selectedgenres);

    //fetching data
    const fetchMoviesData = async () => {
        //destructuring data from data we get from api
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);

        // console.log(data);
        setcontent(data.results);
        setnumberOfPages(data.total_pages);

    }
    useEffect(() => {
        fetchMoviesData();
        // eslint-disable-next-line
    }, [page, genreforURL])

    // component calling/rendering
    return (
        <div>
            <span className="pageTitle">Series/Tv</span>
            <Genres type='tv' selectedgenres={selectedgenres} genres={genres} setgenres={setgenres} setselectedgenres={setselectedgenres} setPage={setpage} />
            <div className="Series">
                {
                    content && content.map((elm) => {
                        return <SingleContent key={elm.id} id={elm.id} poster={elm.poster_path} title={elm.title || elm.name} date={elm.first_air_date || elm.release_date} media_type={elm.media_type} rating={elm.vote_average} />
                    })
                }
            </div>
            {numberOfPages > 1 && (<CustomPagination count={numberOfPages} setpage={setpage} />)}
        </div>
    )
}

export default Series
