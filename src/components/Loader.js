import React from 'react';
//Gif
import spinner from "../Gif/Loading.gif"
//styles
import styles from "./Loader.module.css"
const Loader = () => {
    return (
        <div className={styles.container}>
            <img src={spinner} alt="Loading"/>
        </div>
    );
};

export default Loader;