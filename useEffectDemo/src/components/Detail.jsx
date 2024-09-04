import styles from "./Detail.module.css";
import { useState, useEffect } from "react";

const Detail = ({id, handleOnClose}) => {
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => setCharacter(data[0]))
    },[id]); 

    return (
        <div className={styles.modalDetail}>
            {
            !character ? <h2>Cargando...</h2> : (
                <>
                    <h1>{character?.name}</h1>
                    <img style={{borderRadius: "10rem",width: "200px"}} src={character?.image} alt={character?.name} />
                    <br/>
                    <button onClick={handleOnClose}>Close</button>
                </>
            )    
        }
        </div>
    )
}

export default Detail;