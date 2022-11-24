import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { activeNote } from "../../../actions/notes";
import { RecipeEntry } from "../../../components/recipes/RecipeEntry";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {};

let store = mockStore(initialState);

store.dispatch = jest.fn();

describe("Pruebas en RecipeEntry", () => {
  const note = {
    id: 10,
    date: 0,
    title: "Ayuda pofavo",
    body: "equisde",
    url: "https://flaticon.com/mouth.png",
  };

  const wrapper = mount(
    <Provider store={store}>
      <RecipeEntry {...note} />
    </Provider>
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de disparar el activeNote", () => {
    wrapper.find(".randomClass").prop("onClick")();

    expect(store.dispatch).toHaveBeenCalledWith(
      activeNote(note.id, { ...note })
    );
  });
});
