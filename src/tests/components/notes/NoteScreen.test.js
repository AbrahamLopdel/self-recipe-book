import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { activeNote } from "../../../actions/notes";
import { NoteScreen } from "../../../components/notes/NoteScreen";

jest.mock("../../../actions/notes", () => ({
  activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {
    uid: "1",
    name: "Abraham",
  },
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: "12434",
      title: "Buen título",
      body: "Good job",
      date: 0,
    },
    notes: [],
  },
};

let store = mockStore(initialState);

store.dispatch = jest.fn();

describe("Pruebas en NoteScreen", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  const wrapper = mount(
    <Provider store={store}>
      <NoteScreen />
    </Provider>
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de dispararse activeNote", () => {
    wrapper.find('input[name="title"]').simulate("change", {
      target: {
        name: "title",
        value: "Hey world",
      },
    });

    expect(activeNote).toHaveBeenLastCalledWith("12434", {
      body: "Good job",
      title: "Hey world",
      id: "12434",
      date: 0,
    });
  });
});
