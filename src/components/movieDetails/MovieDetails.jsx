import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById, getSimilarMoviesById, getCreditsMoviesById, getReviewsByID } from "../../APIHandler";
import { Link } from "react-router-dom";
import { validateImage } from "../../Tool";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState();
    const [similarMovies, setSimilarMovies] = useState();
    const [creditsMovies, setCreditsMovies] = useState();
    const [reviews, setReviews] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setMovie(await getMovieById(movieId));
            setSimilarMovies(await getSimilarMoviesById(movieId));
            setCreditsMovies(await getCreditsMoviesById(movieId));
            setReviews(await getReviewsByID(movieId));
        }

        fetchData();

        window.scrollTo(0, 0);
    }, [movieId]);

    return (
        <article className="row">
            <section style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(https://image.tmdb.org/t/p/w500${movie?.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
                }}
                className="row p-2">

                <figure className="col-lg-6">
                    <img style={{borderRadius: "20px"}} className="w-100" src={validateImage("https://image.tmdb.org/t/p/w500", movie?.poster_path)} alt="MovieImage" />
                </figure>
                <section className="col-lg-6" >
                    <article className="row"
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            borderRadius: "20px"
                        }}>
                        <h1>{movie?.title}</h1>
                        <p><strong>Genre:</strong>{
                            movie?.genres.map((movie) => (
                                <span> {movie.name}</span>
                            ))
                        }
                        </p>
                        <p>{movie?.overview}</p>
                        <p><strong>Release date:</strong> {movie?.release_date}</p>
                        <p><strong>Rating:</strong> {movie?.vote_average} ⭐</p>
                        <p><strong>Movie Time:</strong> {movie?.runtime} minutes</p>

                        <h3>Cast:</h3>
                        {
                            creditsMovies?.cast.map((creditsMovie, i) => (
                                i < 8 ?
                                    <article key={creditsMovie.id} className="col-3">
                                        <Link to={`/person/details/${creditsMovie.id}`}>
                                            <img className="w-100" src={validateImage("https://image.tmdb.org/t/p/w500", creditsMovie.profile_path)} alt={creditsMovie.name} />
                                        </Link>
                                        <p className="m-0">Cast: {creditsMovie.name}</p>
                                        <p>Character: {creditsMovie.character}</p>
                                    </article>
                                    : <></>
                            ))
                        }
                    </article>
                </section>
            </section>
            <section className="row mt-4">
                <section className="col-12 text-center mt-5 mb-4">
                    <h2>Similar Movies</h2>
                </section>
                {
                    similarMovies?.results.map((similarMovie, i) => (
                        i < 6 ?
                            <article key={similarMovie.id} className="col-md-2">
                                <div className="card w-100" style={{ width: "18rem" }}>
                                    <img src={validateImage("https://image.tmdb.org/t/p/w500", similarMovie.poster_path)} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{similarMovie.title}</h5>
                                        <p className="card-text">{similarMovie.overview.length > 30 ? similarMovie.overview.substring(0, 30) : similarMovie.overview}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Realease Date: <span>{similarMovie.release_date}</span></li>
                                        <li className="list-group-item">Popularrity: <span>{similarMovie.popularity}</span></li>
                                        <li className="list-group-item">Average: <span>{similarMovie.vote_average}</span></li>
                                    </ul>
                                    <div className="card-body">
                                        <Link to={`/movie/details/${similarMovie.id}`} className="card-link">See More</Link>
                                    </div>
                                </div>
                            </article>
                            : <></>
                    ))
                }
            </section>
            <article className="row mt-5">
                <h1 className="text-center mb-4">Movie's Reviews</h1>
                {
                    reviews?.results.map((review, i) => (
                        i < 10 ?
                            <article key={review.id} className="row m-3">
                                <figure className="col-3 ">
                                    <img className="img-fluid" src={validateImage("https://image.tmdb.org/t/p/w500", review.author_details.avatar_path)} alt="" />
                                </figure>
                                <section className="col-9">
                                    <h4>{review.author}: </h4>
                                    <p>{review.content.length > 30 ? review.content.substring(0, 300) : review.content}</p>
                                </section>
                            </article>
                            : <></>
                    ))
                }
            </article>
        </article>
    );
};

export default MovieDetails;
