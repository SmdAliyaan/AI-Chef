"use client";

import { getMealsByArea } from "@/actions/mealdb.actions";
import RecipeGrid from "@/components/RecipeGrid";
import { useParams } from "next/navigation";

export default function CuisineRecipesPage() {
  const params = useParams();
  const category = params.category;

  return (
    <RecipeGrid
        type = "category"
        value = {category}
        fetchAction={getMealsByArea}
        backLink="/dashboard"
    />
  );
}