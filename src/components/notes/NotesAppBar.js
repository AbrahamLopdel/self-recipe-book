import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelActiveNote,
  startSaveNote,
  startUploading,
} from "../../actions/notes";

export const NotesAppBar = ({ history }) => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);
  
  const noteDate = moment(active.date);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handlePictureUpload = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  const handleCancel = () => {
    dispatch(cancelActiveNote(active));
  };

  return (
    <div className="notes__appbar">
      <i
        className="far fa-window-close notes__cancel"
        onClick={handleCancel}
      ></i>
    <span>{noteDate.format("MMMM Do YYYY")}</span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handlePictureUpload}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
