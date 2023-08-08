import React from "react";
import styles from './categoriesHeader.module.scss'

interface IProp {
    name: string;
}

export default function CategoriesHeader({ name }: IProp) {

    return (
        <div>
            <div className={styles.titleDiv}>
                <h1 className={styles.title}>
                    {name}
                </h1>
            </div>
        </div>
    )
}
