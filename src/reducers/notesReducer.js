import { types } from "../types/types";

const initialState = {
  notes: [],
  notesFiltered: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.noteActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.notesNoActive:
      return {
        ...state,
        active: null,
      };

    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    case types.noteUpdated:
      return {
        ...state,
        active: null,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };

    case types.notesDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case types.notesLogoutCleaning:
      return {
        ...state,
        active: null,
        notes: [],
      };

    case types.notesFilteredByTitle:
      return {
        ...state,
        active: null,
        notesFiltered: state.notes.filter((note) =>
          note.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case types.notesFilteredByBody:
      return {
        ...state,
        active: null,
        notesFiltered: state.notes.filter((note) =>
          note.body.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case types.notesFilteredByFood:
      return {
        ...state,
        active: null,
        notesFiltered: state.notes.filter((note) =>
          note.food.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case types.notesFilteredByTime:
      return {
        ...state,
        active: null,
        notesFiltered: state.notes.filter(
          (note) => note.time === action.payload
        ),
      };

    case types.notesFilteredBy:
      return {
        ...state,
        active: null,
        notesFiltered: state.notes.filter((note) =>
          action.filter.map((filt) => {
            if (filt === "title") {
              return note.title
                .toLowerCase()
                .includes(action.payload.toLowerCase());
            }
            if (filt === "body") {
              return note.body
                .toLowerCase()
                .includes(action.payload.toLowerCase());
            }
            if (filt === "food") {
              return note.food
                .toLowerCase()
                .includes(action.payload.toLowerCase());
            }
            return false;
          })
        ),
      };

    default:
      return state;
  }
};
