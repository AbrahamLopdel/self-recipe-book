import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = ({ history }) => {
  const dispatch = useDispatch();
  const { active: entry } = useSelector((state) => state.notes);
  const [foodFocus, setFoodFocus] = useState(false);
  const [foodAr, setFoodAr] = useState([]);
  const [vegetarian, setVegetarian] = useState(entry.vegetarian);
  const [values, handleInputChange, reset] = useForm(entry);
  const { body, title, steps, time, food } = values;

  const activeId = useRef(entry.id);
  const [nextStep, setNextStep] = useState(1);
  

  useEffect(() => {
    if (vegetarian) {
      document.querySelector("#vg").checked = true;
    }
  }, [vegetarian]);

  useEffect(() => {
    if (entry.id !== activeId.current) {
      reset(entry);
      activeId.current = entry.id;
    }
  }, [entry, reset]);

  useEffect(() => {
    if (food) setFoodAr(food.split(","));
  }, [food]);

  useEffect(() => {
    dispatch(activeNote(values.id, { ...values, vegetarian }));
  }, [values, vegetarian, dispatch]);

  function handleSteps(e) {
    if(e.key === 'Enter') {
      setNextStep(nextStep + 1);
      document.querySelector("#steps").value = nextStep + ". ";
    }
  }

  const handleVegetarian = () => {
    setVegetarian(!vegetarian);
  };

  const handleFoodFocus = () => {
    setFoodFocus(!foodFocus);
  };

  const handleDelete = () => {
    dispatch(startDeleting(entry.id));
  };

  return (
    <div className="notes__main-content animate__animated animate__fadeIn animate__faster">
      <NotesAppBar history={history} />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Título de la receta"
          className="notes__title-input"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Descripción de la receta"
          className="notes__textarea notes__textarea-ingredientes"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        <textarea
          id="steps"
          placeholder="Pasos a seguir"
          className="notes__textarea notes__textarea-ingredientes"
          name="steps"
          value={steps}
          onChange={handleInputChange}
          onKeyDown={handleSteps}
        ></textarea>
        <label className="notes__food">
          <button
            className={`btn btn-primary btn-focus ${
              foodFocus && "btn-success"
            }`}
            onClick={handleFoodFocus}
          >
            Ingredientes:
          </button>
          (Poner ingredientes seguidos de comas)
          {foodFocus ? (
            <textarea
              placeholder="Ingrediente"
              id="ingredientes_textarea"
              className="notes__time-input"
              name="food"
              value={food}
              onChange={handleInputChange}
            ></textarea>
          ) : (
            <ul>
              {foodAr.map((food, i) => {
                return <li key={i}>{food}</li>;
              })}
            </ul>
          )}
        </label>
        <label>
          Duración:
          <input
            type="number"
            placeholder="0"
            className="notes__time-input"
            autoComplete="off"
            name="time"
            value={time}
            onChange={handleInputChange}
          />
        </label>
        <div className="form-check form-switch ">
          <label className="form-check-label">
            Vegetariana
            <input
              className="form-check-input"
              type="checkbox"
              id="vg"
              name="vegetarian"
              value={vegetarian}
              onClick={handleVegetarian}
            />
          </label>
        </div>
        {entry.url && (
          <div className="notes__image">
            <img src={entry.url} alt="imagen" />
          </div>
        )}
      </div>

      <button className="btn btn-danger btn-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
