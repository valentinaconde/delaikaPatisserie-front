import React from "react";
import CategoriesHeader from "../components/categoriesHeader";
import Cards from "../components/cards";

export default function Masas() {

    //HARCODED
    let recipes = [
        {
            title: "Recipe 1 MASAS",
            description: "Description 1",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Recipe 2 MASAS",
            description: "Description 2",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Recipe 3 MASAS",
            description: "Description 3",
            image: "https://via.placeholder.com/150"
        }
    ]
    return (
        <div>
            <CategoriesHeader name="masas" />
            <Cards recipes={recipes} />
        </div>
    )
}
