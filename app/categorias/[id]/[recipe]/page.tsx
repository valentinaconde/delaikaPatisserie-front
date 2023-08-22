"use client";
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import Checkbox from '@mui/material/Checkbox';

import data from "../../../utils/data.json";

import { Recipes } from "@/app/interfaces/recipes.interface";
import CategoriesHeader from "../../../components/categoriesHeader";

import styles from './recipes.module.scss'


export default function Recipe() {

    const [recipe, setRecipe] = useState<Recipes>()
    const params = useParams()

    useEffect(() => {
        setRecipe(data.data.find((item) => item.id === Number(params.recipe)))
    }, [])


    return (
        <div className={styles.recipeContainer}>
            <CategoriesHeader name={recipe?.title} />
            <div className={styles.ingredients}>
                <img src={recipe?.image} alt={recipe?.title} className={styles.image} />
                <div className={styles.infoIngredients}>
                    <h1 className={styles.titleIngredients}>Ingredientes</h1>
                    <ul className={styles.list}>
                        {recipe?.ingredients?.map((ingredient, index) => (
                            <li className={styles.items} key={index}>
                                {ingredient.quantity}{ingredient.unit} {ingredient.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.steps}>
                <h1 className={styles.titleIngredients}>Pasos</h1>
                {recipe?.steps?.map((step, index) => (
                    <li className={styles.items}  key={index}>
                        {step.description}
                    </li>
                ))}

            </div>

        </div>
    )
}
