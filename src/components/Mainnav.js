import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatahotIcon from '@mui/icons-material/Whatshot'
import MovieIcon from '@mui/icons-material/Movie'
import SearchIcon from '@mui/icons-material/Search'
import TvIcon from '@mui/icons-material/Tv'
import { useNavigate } from "react-router-dom"


export default function SimpleBottomNavigation() {
    // it is changing our value from 0 to 3 like array
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (value === 0) {
            navigate("/");
        }
        else if (value === 1) {
            navigate("/movies");
        }
        else if (value === 2) {
            navigate("/series")
        }
        else if (value === 3) {
            navigate("/search");
        }

    }, [value, navigate]);

    return (
        <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                style={{ backgroundColor: "#483434", zIndex: 100 }}
            >
                <BottomNavigationAction style={{ color: "#fff" }} label="Trending" icon={<WhatahotIcon />} />
                <BottomNavigationAction style={{ color: "#fff" }} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction style={{ color: "#fff" }} label="TV/Series" icon={<TvIcon />} />
                <BottomNavigationAction style={{ color: "#fff" }} label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Box >
    );
}