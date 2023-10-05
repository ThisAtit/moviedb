const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTFiOTIxNTJmZjdiZmJlNjNlYjVlOGZjYjc1MTRhMCIsInN1YiI6IjY0ZWM0NmQ5NTI1OGFlMDBlYWE1NDkwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPHdbiKR1iI9XHkbmMN6ZS9V4fTVXmLtZ5SK203EqOY";

export const getNowPlayingMovies = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getPopularMovies = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/popular", {
        method: "GET", 
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getTopRatedMovies = async () => {
    const result = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getUpcomingMovies = async () => {
    const result = await fetch ("https://api.themoviedb.org/3/movie/upcoming", {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getMovieById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getTvById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getSimilarMoviesById = async (id) => {
    const result = await fetch (`https://api.themoviedb.org/3/movie/${id}/similar`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getCreditsMoviesById = async (id) => {
    const result = await fetch (`https://api.themoviedb.org/3/movie/${id}/credits`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getReviewsByID = async (id) => {
    const result = await fetch (`https://api.themoviedb.org/3/movie/${id}/reviews`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getMultiSearchResult = async (query) => {
    const result = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getAiringTodaySeries = async () => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/airing_today`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}


export const getOnTheAirSeries = async () => {
    const result = await fetch(`https://api.themoviedb.org/3/tv/on_the_air`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    });

    return await result.json();
}

export const getPopularSeries = async () => {
    const result = await fetch (`https://api.themoviedb.org/3/tv/popular`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getTopRatedSeries = async () => {
    const result = await fetch (`https://api.themoviedb.org/3/tv/top_rated`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}

export const getPersonById = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/person/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8",
            "authorization": "bearer " + bearerToken
        }
    })

    return await result.json();
}