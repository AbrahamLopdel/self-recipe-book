import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      steps: "",
      food: "",
      time: 0,
      vegetarian: false,
      date: new Date().getTime(),
    };
    try {
      const document = await db.collection(`${uid}/journal/notes`).add(newNote);

      dispatch(activeNote(document.id, newNote));
      dispatch(addNewNote(document.id, newNote));
    } catch (error) {
      console.log(error);
    }
  };
};

export const activeNote = (id, note) => ({
  type: types.noteActive,
  payload: {
    id,
    ...note,
  },
});

export const noActiveNote = () => ({
  type: types.notesNoActive,
  payload: null,
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const cancelActiveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      steps: "",
      food: "",
    };

    if(note.title === newNote.title && note.body === newNote.body && note.steps === newNote.steps && note.food === newNote.food ) {
      await db.doc(`/${uid}/journal/notes/${note.id}`).delete();
      dispatch(deleteNote(note.id))
    }

    dispatch(noActiveNote());
  }
}

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const newNote = {
      title: "",
      body: "",
      steps: "",
      food: "",
    };

    if(note.title === newNote.title && note.body === newNote.body && note.steps === newNote.steps && note.food === newNote.food ) {
      await db.doc(`/${uid}/journal/notes/${note.id}`).delete();
      dispatch(deleteNote(note.id))
    }
    else {
      await db.doc(`/${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    }

    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire("Saved", note.title, "success");
  };
};

export const refreshNote = (id, note) => ({
  type: types.noteUpdated,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({
      title: "Uploading...",
      text: "Please wait...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;

    dispatch(startSaveNote(activeNote));
    Swal.close();
  };
};

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const note = getState().notes.active
    const result = await Swal.fire({
      title: `¿Estás seguro de que deseas eliminar la receta "${
        note.title ? note.title : "Sin nombre"
      }"?`,
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
    });

    if (result.isConfirmed) {
      const uid = getState().auth.uid;

      await db.doc(`/${uid}/journal/notes/${id}`).delete();

      dispatch(deleteNote(id));
    }
  };
};

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

export const notesLogout = () => ({
  type: types.notesLogoutCleaning,
});

export const notesFilteredByTitle = (notesName) => ({
  type: types.notesFilteredByTitle,
  payload: notesName,
});

export const notesFilteredByBody = (notesDesc) => ({
  type: types.notesFilteredByBody,
  payload: notesDesc,
});

export const notesFilteredByFood = (notesFood) => ({
  type: types.notesFilteredByFood,
  payload: notesFood,
});

export const notesFilteredByTime = (notesTime) => ({
  type: types.notesFilteredByTime,
  payload: notesTime,
});

export const notesFilteredBy = (notes, filter) => ({
  type: types.notesFilteredBy,
  payload: notes,
  filter,
});
