// CSS
import "./app.scss";

// General 
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page
import MovieDetails from "./components/movieDetails/MovieDetails";
import Home from "./components/home/Home";
import SearchResult from "./components/searchResult/SearchResult";
import TV from "./components/tv/TV";
import TvDetails from "./components/tvDetails/TvDetails";
import PersonDetails from "./components/personDetails/PersonDetails";


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/details/:movieId" element={<MovieDetails/>}></Route>
          <Route path="/person/details/:personId" element={<PersonDetails/>}></Route>
          <Route path="/tv/details/:tvId" element={<TvDetails/>}></Route>
          <Route path="/searchResult" element={<SearchResult/>}/>
          <Route path="/tv" element={<TV />} />
          <Route path="*" element={<>HTTP 404 - The Page you wew looking does not exist</>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
