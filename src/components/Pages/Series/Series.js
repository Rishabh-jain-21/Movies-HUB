import axios from 'axios'
import React, { useState, useEffect } from 'react'
import CustomPagination from '../../CustomPagination/CustomPagination';
import SingleContent from '../../SingleContent/SingleContent';
import useGenre from '../../../Hooks/useGenres';
import Genres from '../../Genres';
import "./Series.css"

const Series = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const genreforURL = useGenre(selectedGenres);

    const fetchSeries = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
        // console.log(data);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSeries();
        // eslint-disable-next-line
    }, [genreforURL, page]);

    return (
        <div>
            <span className="pageTitle">Discover Series</span>
            <Genres
                type="tv"
                selectedgenres={selectedGenres}
                setselectedgenres={setSelectedGenres}
                genres={genres}
                setgenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {content &&
                    content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type="tv"
                            vote_average={c.vote_average}
                        />
                    ))}
            </div>
            {numOfPages > 1 && (
                <CustomPagination setpage={setPage} count={numOfPages} />
            )}
        </div>
    );
};


export default Series
