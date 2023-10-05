import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersonById } from "../../APIHandler";
import { validateImage } from "../../Tool";

const PersonDetails = () => {
    const { personId } = useParams();
    const [ person, setPerson ] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setPerson(await getPersonById(personId));
        }

        fetchData();
    }, [])

    return (
        <>
            <article className="row">
                <figure className="col-6">
                    <img className="w-100" src={validateImage("https://image.tmdb.org/t/p/w500", person?.profile_path)} alt={person?.name} />
                </figure>
                <section className="col-6">
                    <h1>{person?.name}</h1>
                    <p><strong>Birthday: </strong>{person?.birthday}</p>
                    <p><strong>Department: </strong>{person?.known_for_department}</p>
                    <p>{person?.biography}</p>
                    <p><strong>Popularity: </strong>{person?.popularity}</p>
                </section>
            </article>
        </>
    )
}

export default PersonDetails;