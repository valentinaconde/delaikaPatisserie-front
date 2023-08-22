"use client";
import Cards from "../cards";
import styles from './ultimas.module.scss'
import MicrowaveIcon from '@mui/icons-material/Microwave';
import data from "../../utils/data.json";
import { useEffect } from "react";

export default function Ultimas() {

    useEffect(() => {
        console.log(data)
    }, [])

    const recipes = data.data.slice(data.data.length - 8)

    return (
        <div >
            <div className={styles.titleDiv}>
                <MicrowaveIcon className={styles.icon} />
                <h1 className={styles.title}>Recién salidas del horno</h1>
            </div>
            <Cards recipes={recipes} className={styles.caca} />
        </div>
    )
}
