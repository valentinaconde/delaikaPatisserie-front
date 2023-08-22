import React from "react";
import styles from './cards.module.scss'
import { Recipes } from '@/app/interfaces/recipes.interface'
interface IProp {
    recipes: Recipes[]
}

export default function Cards({ recipes }: IProp) {

    return (
        <div className={styles.container}>
            {
                recipes.map((recipe) => {
                    return (
                        <article className={styles.article}>
                            <a href={`/categorias/${recipe.categoryId}/${recipe.id}`}>
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


