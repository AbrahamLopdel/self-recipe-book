import React from "react";
import { Menu } from "./Menu";
// import { NothingSelected } from "./NothingSelected";
import { NoteScreen } from "../notes/NoteScreen";
import { useSelector } from "react-redux";

export const RecipesScreen = ({ history }) => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="recipes__main-content animate__animated animate__fadeIn">
      <main>
        {active ? <NoteScreen history={history} /> : <Menu history={history} />}
      </main>
    </div>
  );
};
