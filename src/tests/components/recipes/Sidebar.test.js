import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { Menu } from "../../../components/recipes/Menu";
import { startLogout } from "../../../actions/auth";
import { startNewNote } from "../../../actions/notes";

jest.mock("../../../actions/auth", () => ({
  startLogout: jest.fn(),
}));

jest.mock("../../../actions/notes", () => ({
  startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    notes: [],
  },
};

let store = mockStore(initialState);

store.dispatch = jest.fn();

describe("Pruebas en Sidebar", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  const wrapper = mount(
    <Provider store={store}>
      <Menu />
    </Provider>
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar al startLogout", () => {
    wrapper.find("button").prop("onClick")();

    expect(startLogout).toHaveBeenCalled();
  });

  test("Debe de llamar el startNewNote", () => {
    wrapper.find(".recipes__new-entry").prop("onClick")();

    expect(startNewNote).toHaveBeenCalled();
  });
});
