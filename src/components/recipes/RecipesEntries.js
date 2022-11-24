import React from "react";
import { useSelector } from "react-redux";
import { RecipeEntry } from "./RecipeEntry";

export const RecipesEntries = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="recipes__entries">
      {(notes.length > 0) ? 
      notes.map((note) => (
        <RecipeEntry key={note.id} {...note} />
      )) :
      (<div className="recipes__empty">
        <p>Todavía no tienes recetas en tu recetario</p>
        <p>¡Crea una cuanto antes!</p>
      </div>)}
    </div>
  );
};
