import React from "react";
import { Link } from "react-router-dom";

const Popular = ({ tvList }) => {
    if (tvList === undefined) {
        return (
            <article className="row">
                <section className="col-12">
                    <h1>No Series...</h1>
                </section>
            </article>
        )
    }

    return(
        <article className="row mb-5 mt-5">
            <h1>Popular Series</h1>
            {
                tvList.results.map((tv, i) => (
                    i < 8 ?
                    <article key={tv.i} style={{ fontSize: "20px", padding: "20px"}} className="col-sm-6 col-md-3">
                        <h1 style={{fontSize: "1em", height:35}}>{tv.name}</h1>
                        <img style={{ width: "100%", objectFit:"cover"}} className="img-fluid" src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt="tv Image" />
                        <Link to={`/tv/details/${tv.id}`} className="btn btn-primary mt-3">More Details</Link>
                    </article>
                    : <React.Fragment key={tv.id}></React.Fragment>
                ))
            }
        </article>
    )
    
}

export default Popular;