import React from "react";
import Cards from "../cards";
import styles from './categories.module.scss'
interface IProp {
    name: string;
    recipes: Array<{ title: string, description: string, image: string }>
}

export default function Category({ name, recipes }: IProp) {

    return (
        <div>
            <div className={styles.titleDiv}>
                <h1 className={styles.title}>
                    {name}
                </h1>
            </div>

            <Cards recipes={recipes} />
        </div>
    )
}
