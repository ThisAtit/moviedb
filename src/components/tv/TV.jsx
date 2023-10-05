import { useEffect, useState } from "react";
import { getAiringTodaySeries, getOnTheAirSeries, getPopularSeries, getTopRatedSeries } from "../../APIHandler";
import AiringToday from "../series/airingToday/AiringToday";
import OnTheAir from "../series/onTheAir/OnTheAir";
import Popular from "../series/popular/Popular";
import TopRated from "../series/topRated/TopRated";

const TV = () => {
    const [airingTodaySeries, setAiringTodaySeries] = useState();
    const [onTheAirSeries, setOnTheAirSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [topRatedSeries, setTopRatedSeries] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setAiringTodaySeries(await getAiringTodaySeries());
            setOnTheAirSeries(await getOnTheAirSeries());
            setPopularSeries(await getPopularSeries());
            setTopRatedSeries(await getTopRatedSeries())
        }

        fetchData();
    }, []);
    
    return (
        <>
            <AiringToday tvList={airingTodaySeries}/>
            <OnTheAir tvList={onTheAirSeries}/>
            <Popular tvList={popularSeries}/>
            <TopRated tvList={topRatedSeries}/>
        </>
    );
};

export default TV;
