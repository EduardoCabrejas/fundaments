/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styles from "./Houses.module.css";

const Houses = ({ setSelectedHouse }) => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
            .then((response) => response.json())
            .then((data) => setHouses(data))
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.buttonsContainer}>
                <button onClick={() => setSelectedHouse("Gryffindor")}>Gryffindor</button>
                <button onClick={() => setSelectedHouse("Slytherin")}>Slytherin</button>
                <button onClick={() => setSelectedHouse("Hufflepuff")}>Hufflepuff</button>
                <button onClick={() => setSelectedHouse("Ravenclaw")}>Ravenclaw</button>
                <button onClick={() => setSelectedHouse(null)}>Restablecer</button>
            </div>
        </div>
    );
}

export default Houses;

