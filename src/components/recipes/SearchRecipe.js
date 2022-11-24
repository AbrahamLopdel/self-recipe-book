import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { RecipeCard } from "../recipe/RecipeCard";
import {
  notesFilteredByBody,
  notesFilteredByFood,
  notesFilteredByTime,
  notesFilteredByTitle,
} from "../../actions/notes";

export const SearchRecipe = ({ history }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  /**
   * 
   * @returns Devuelve el estado guardado del botón del título de la receta
   */
  const initStateTitle = () => {
    if (localStorage.getItem("title")) {
      return JSON.parse(localStorage.getItem("title"));
    } else {
      return true;
    }
  };

  /**
   * 
   * @returns Devuelve el estado guardado del botón de la decripción de la receta
   */
  const initStateB = () => {
    return JSON.parse(localStorage.getItem("body"));
  };


  /**
   * 
   * @returns Devuelve el estado guardado del botón de los ingredientes de la receta
   */
  const initStateF = () => {
    return JSON.parse(localStorage.getItem("food"));
  };


  /**
   * 
   * @returns Devuelve el estado guardado del botón del tiempo de la receta
   */
  const initStateTime = () => {
    return JSON.parse(localStorage.getItem("time"));
  };

  const [checkedTitle, setCheckedTitle] = useState(initStateTitle);
  const [checkedBody, setCheckedBody] = useState(initStateB);
  const [checkedFood, setCheckedFood] = useState(initStateF);
  const [checkedTime, setCheckedTime] = useState(initStateTime);

  // const [filts, setFilts] = useState([]);
  

  const [values, handleInputChange] = useForm({
    search: q,
  });

  const { search } = values;

  //   const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  const { notesFiltered } = useSelector((state) => state.notes);

  const handleCheckedTitle = () => {
    setCheckedTitle(!checkedTitle);
    localStorage.setItem("title", JSON.stringify(!checkedTitle));

    if (checkedTime) {
      setCheckedTime(false);
      localStorage.setItem("time", JSON.stringify(false));
    }
  };

  const handleCheckedBody = () => {
    setCheckedBody(!checkedBody);
    localStorage.setItem("body", JSON.stringify(!checkedBody));

    if (checkedTime) {
      setCheckedTime(false);
      localStorage.setItem("time", JSON.stringify(false));
    }
  };
  const handleCheckedFood = () => {
    setCheckedFood(!checkedFood);
    localStorage.setItem("food", JSON.stringify(!checkedFood));

    if (checkedTime) {
      setCheckedTime(false);
      localStorage.setItem("time", JSON.stringify(false));
    }
  };
  const handleCheckedTime = () => {
    setCheckedTime(!checkedTime);
    localStorage.setItem("time", JSON.stringify(!checkedTime));

    if (checkedTitle) {
      setCheckedTitle(false);
      localStorage.setItem("title", JSON.stringify(false));
    }
    if (checkedBody) {
      setCheckedBody(false);
      localStorage.setItem("body", JSON.stringify(false));
    }
    if (checkedFood) {
      setCheckedFood(false);
      localStorage.setItem("food", JSON.stringify(false));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };

  /**
   * Hook que nos ayuda a actualizar la búsqueda de recetas cada vez que cambiemos el input del buscador
   */
  useEffect(() => {
    if (checkedTitle) {
      // setFilts(["title"]);
      dispatch(notesFilteredByTitle(search));
    }
    
    if (checkedBody) {
      // setFilts(["body"]);
      dispatch(notesFilteredByBody(search));
    }
    
    if (checkedFood) {
      // setFilts(["food"]);
      dispatch(notesFilteredByFood(search));
    }
    
    if (checkedTime) {
      dispatch(notesFilteredByTime(search));
    }
    
    if (checkedTime) {
      dispatch(notesFilteredByTime(search));
    }
    //  else {
    //   dispatch(notesFilteredBy(search, filts));
    // }
  }, [search, checkedTitle, checkedBody, checkedFood, checkedTime, dispatch]);
  
  const handleCancel = () => {
    history.push("/");
  };

  return (
    <div className="recipes__search-recipe">
      <div className="recipes__top">
        <i
          className="far fa-window-close notes__cancel"
          onClick={handleCancel}
        ></i>
        <h1>Buscador de recetas</h1>
      </div>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscador de recetas...</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <div>
              <div className="btn-group btn-group-toggle">
                <label
                  className={`btn-filter ${checkedTitle && "bg-filtered"}`}
                >
                  <input type="checkbox" onClick={handleCheckedTitle} /> Título
                </label>
                <label className={`btn-filter ${checkedBody && "bg-filtered"}`}>
                  <input type="checkbox" onClick={handleCheckedBody} />{" "}
                  Descripción
                </label>
                <label className={`btn-filter ${checkedFood && "bg-filtered"}`}>
                  <input type="checkbox" onClick={handleCheckedFood} />{" "}
                  Ingredientes
                </label>
                <label className={`btn-filter ${checkedTime && "bg-filtered"}`}>
                  <input type="checkbox" onClick={handleCheckedTime} /> Tiempo
                </label>
              </div>
              <hr />
            </div>
            <input
              type="text"
              placeholder="Buscar receta"
              autoComplete="off"
              className="form-control"
              name="search"
              value={search}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-success m-3">
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === "" && <div className="alert alert-info">Busca una receta</div>}
          {q !== "" && notesFiltered.length === 0 && (
            <div className="alert alert-danger">
              No hay ninguna receta por {q}
            </div>
          )}
          {q !== "" &&
            notesFiltered.length !== 0 &&
            notesFiltered.map((hero) => <RecipeCard key={hero.id} {...hero} />)}
        </div>
      </div>
    </div>
  );
};
