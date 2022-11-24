import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

export const RecipeEntry = ({
  id,
  date,
  food,
  title,
  time,
  body,
  steps,
  vegetarian,
  url,
}) => {
  const dispatch = useDispatch();

  const noteDate = moment(date);

  const note = {
    date,
    food,
    title,
    time,
    body,
    steps,
    vegetarian,
    url,
  };

  const handleEntryClick = () => {
    dispatch(activeNote(id, note));
  };

  return (
    <div className="randomClass" onClick={handleEntryClick}>
      <div className="recipes__entry pointer animate__animated animate__bounceInLeft animate__faster">
        {url && (
          <div
            className="recipes__entry-picture"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${url})`,
            }}
          ></div>
        )}

        <div className="recipes__entry-body">
          <p className="recipes__entry-title">{title}</p>
        </div>

        <div className="recipes__entry-date-box">
          <span>{noteDate.format("dddd")}</span>
          <h4>{noteDate.format("DD")}</h4>
        </div>
      </div>
    </div>
  );
};
