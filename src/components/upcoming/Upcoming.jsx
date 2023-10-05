import { Link } from "react-router-dom";
import React from "react";

const Upcoming = ({ movieList }) => {

    if (movieList === undefined) {
        return (
            <section className="row">
                <div className="col-12">
                    <h1>No Movies...</h1>
                </div>
            </section>
        )
    }

    return (
        <article>
            <section className="row mb-5 mt-5">
                <h1 style={{fontSize: "3em"}} className="text-center">Upcoming Movies</h1>
                {
                    movieList.results.map((movie, i) => (
                        i < 8 ?
                        <article key={movie.id} style={{fontSize: "20px", padding:"20px"}} className="col-sm-6 col-md-3">
                            <h1 style={{fontSize: "1em", height:35}}>{movie.title}</h1>
                            <img style= {{ width: "100%", objectFit:"cover"}}  className="img-fluid" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Image" />
                            <Link to={`/movie/details/${movie.id}`} className="btn btn-primary mt-3">Details Movie</Link>
                        </article>
                        : <React.Fragment key={movie.id}></React.Fragment>
                    ))
                }
            </section>
        </article>
    );
};

export default Upcoming;