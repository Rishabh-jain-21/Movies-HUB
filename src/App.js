import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from "./components/Mainnav"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container } from "@mui/material"
import Trending from './components/Pages/Trending/Trending';
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Container>
            <Routes>
              <Route exact path="/" element={<Trending />} />
              <Route exact path="/movies" element={<Movies />} />
              <Route exact path="/series" element={<Series />} />
              <Route exact path="/search" element={<Search />} />
            </Routes>

          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
