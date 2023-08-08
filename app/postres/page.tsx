import React from "react";
import CategoriesHeader from "../components/categoriesHeader";
import Cards from "../components/cards";

export default function Postres() {

    // HARCODED
    let recipes = [
        {
            title: "Recipe 1 POSTRES",
            description: "Description 1",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Recipe 2 POSTRES",
            description: "Description 2",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Recipe 3 POSTRES",
            description: "Description 3",
            image: "https://via.placeholder.com/150"
        }
    ]
    return (
        <div>
            <CategoriesHeader name="postres" />
            <Cards recipes={recipes} />
        </div>
    )
}
