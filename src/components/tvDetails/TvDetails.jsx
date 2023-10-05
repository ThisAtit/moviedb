import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { validateImage } from "../../Tool";
import { getTvById, getCreditsMoviesById } from "../../APIHandler";

const TvDetails = () => {
    const {tvId} = useParams();
    const [tv, setTv] = useState();
    const [creditsTvs, setCreditsTvs] = useState();


    useEffect (() => {
        const fetchData = async() => {
            setTv(await getTvById(tvId));
        }

        fetchData();

        window.scrollTo(0,0);
    }, [tvId]);

    return (
        <article className="row">
        <figure className="col-6">
            <img className="w-100" src={validateImage("https://image.tmdb.org/t/p/w500", tv?.poster_path)} alt="Tv Image" />
        </figure>
        <section className="col-6">
            <article className="row">
                <h1>{tv?.name}</h1>
                <p>{tv?.overview}</p>
                <p><strong>First Air date:</strong> {tv?.first_air_date}</p>
                <p><strong>Popularlity:</strong> {tv?.popularity} ⭐</p>
            </article>
        </section>
        </article>
    );
};

export default TvDetails