import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";
import { RecipesEntries } from "./RecipesEntries";

export const Menu = ({ history }) => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  const handleSearchRecipe = () => {
    history.push("/search-recipe");
  };

  return (
    <section className="recipes__sidebar">
      <div className="recipes__sidebar-navbar">
        <h3 className="mt-5 ml-5">
          <i className="far fa-moon"></i>
          <span> {name}</span>
        </h3>

        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="recipes__submenu">
        <div className="recipes__search-entry" onClick={handleSearchRecipe}>
          <i className="fas fa-search fa-1x"></i>
          <p className="mt-1">Buscar recetas</p>
        </div>
        <div className="recipes__new-entry" onClick={handleAddNew}>
          <i className="far fa-calendar-plus fa-1x"></i>
          <p className="mt-1">Nueva receta</p>
        </div>
      </div>

      <RecipesEntries />
    </section>
  );
};
