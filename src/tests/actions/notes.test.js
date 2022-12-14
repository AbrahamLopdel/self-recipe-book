/**
 * @jest-environment node
 */

import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploading,
} from "../../actions/notes";
import { db } from "../../firebase/firebaseConfig";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {
    uid: "TESTING",
  },
  notes: {
    active: {
      id: "cdNvUdgztm8MP38Fddml",
      title: "Hola",
      body: "Mundo",
    },
  },
};

let store = mockStore(initialState);

describe("Pruebas en notes", () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("Debe de crear una nueva nota con startNewNote", async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();
    // console.log(actions)

    expect(actions[0]).toEqual({
      type: types.noteActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    const noteID = actions[0].payload.id;

    await db.doc(`/TESTING/journal/notes/${noteID}`).delete();
  });

  test("startLoadingNotes debe cargar las notas", async () => {
    await store.dispatch(startLoadingNotes("TESTING"));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };

    expect(actions[0].payload[0]).toMatchObject(expected);
  });

  test("startSaveNote debe de actualizar la nota", async () => {
    const note = {
      id: "cdNvUdgztm8MP38Fddml",
      title: "Titulo",
      body: "body",
    };

    await store.dispatch(startSaveNote(note));

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.noteUpdated);
    const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();
    expect(docRef.data().title).toBe(note.title);
  });
});
