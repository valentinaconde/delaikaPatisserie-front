import React from "react";
import Category from "../components/categories";

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
       <Category name="postres" recipes={recipes}/>
        </div>
    )
}
