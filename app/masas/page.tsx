import React from "react";
import Category from "../components/categories";

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
       <Category name="masas" recipes={recipes} />
        </div>
    )
}
