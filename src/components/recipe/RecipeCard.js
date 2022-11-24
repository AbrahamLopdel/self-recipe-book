import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { activeNote } from "../../actions/notes";

export const RecipeCard = ({
  id,
  date,
  food,
  title,
  time,
  body,
  vegetarian,
  url,
}) => {
  const dispatch = useDispatch();

  const note = {
    date,
    food,
    title,
    time,
    body,
    vegetarian,
    url,
  };

  const handleLink = () => {
    dispatch(activeNote(id, note));
  };
  return (
    <div className="card m-3 col" style={{ maxWidth: 540, maxHeight: 300 }}>
      <div className="row no-gutters">
        {url && (
          <div className="col-md-4">
            <img src={url} className="card-img" alt={title} />
          </div>
        )}
        <div className={url && "col-md-8"} style={{ textAlign: "center" }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>

          <Link onClick={handleLink} to="/">
            Más...
          </Link>
        </div>
      </div>
    </div>
  );
};
