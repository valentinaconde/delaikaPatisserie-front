import React from "react";
import CategoriesHeader from "../components/categoriesHeader";
import Cards from "../components/cards";

export default function Tartas() {

    // HARCODED
    let recipes = [
        {
            title: "Recipe 1 TARTAS",
            description: "Description 1",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Recipe 2 TARTAS",
            description: "Description 2",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Recipe 3 TARTAS",
            description: "Description 3",
            image: "https://via.placeholder.com/150"
        }
    ]
    return (
        <div>
            <CategoriesHeader name="tartas" />
            <Cards recipes={recipes} />
        </div>
    )
}
