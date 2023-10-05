import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../../APIHandler";
import { useState, useEffect } from "react";
import NowPlaying from "../nowplaying/NowPlaying";
import Popular from "../../popular/Popular";
import TopRated from "../top_rate/TopRated";
import Upcoming from "../upcoming/Upcoming";

const Home = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [topratedMovies, setTopRatedMovies] = useState();
    const [upcomingMovies, setUpcomingMovies] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setNowPlayingMovies(await getNowPlayingMovies());
            setPopularMovies(await getPopularMovies());
            setTopRatedMovies(await getTopRatedMovies());
            setUpcomingMovies(await getUpcomingMovies());
        }

        fetchData();
    }, []);
    
    return (
        <>
            <NowPlaying movieList={nowPlayingMovies} />
            <Popular movieList={popularMovies}/>
            <TopRated movieList={topratedMovies}/>
            <Upcoming movieList={upcomingMovies}/>
        </>
    );
};

export default Home;