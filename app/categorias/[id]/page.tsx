"use client";
import React, { useEffect, useState } from "react";
import CategoriesHeader from "../../components/categoriesHeader";
import data from "../../utils/data.json";
import categories from "../../utils/categories.utils";
import { useParams  } from 'next/navigation'
import Cards from "../../components/cards";
import { Recipes } from "@/app/interfaces/recipes.interface";
// TO DO change masas name
export default function Masas() {

    const [recipes, setRecipes] = useState<Recipes[]>([])
    const [categoryTitle, setCategoryTitle] = useState<string>()
    const params = useParams()

    useEffect(() => {
      setRecipes(data.data.filter((item) => item.categoryId === Number(params.id)))
      setCategoryTitle(categories.find((category) => category.id === Number(params.id))?.name || '')
    }, [])


    return (
        <div>
            <CategoriesHeader name={categoryTitle} />
            <Cards recipes={recipes} />
        </div>
    )
}
