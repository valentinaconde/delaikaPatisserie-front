import React from "react";
import styles from './cards.module.scss'

interface IProp {
    recipes: Array<{ title: string, description: string, image: string }>
}

export default function Cards({ recipes }: IProp) {

    return (
        <div className={styles.container}>
            {
                recipes.map((recipe) => {
                    return (
                        <article className={styles.article}>
                            <a href="#">
                            <span className={styles.title}>
                               <h4 className={styles.titleLetters}>{recipe.title}</h4> 
                            </span>
                            <span className={styles.image}>
                                <img className={styles.image} src={recipe.image} alt={recipe.title} />
                            </span>
                            </a>
                        </article>
                    )
                })
            }


        </div>
    )
}


