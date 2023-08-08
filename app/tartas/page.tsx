import React from "react";
import Category from "../components/categories";

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
       <Category name="tartas" recipes={recipes}/>
        </div>
    )
}
