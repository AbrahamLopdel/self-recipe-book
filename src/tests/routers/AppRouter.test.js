import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { login } from "../../actions/auth";
import { AppRouter } from "../../routers/AppRouter";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { firebase } from "../../firebase/firebaseConfig";

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
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
    active: {
      id: "askdh",
    },
    notes: [],
  },
};

let store = mockStore(initialState);

store.dispatch = jest.fn();

describe("Pruebas en AppRouter", () => {
  test("Debe de llamar al login si el usuario está autenticado", async () => {
    let user;

    await act(async () => {
      const userCred = await firebase
        .auth()
        .signInWithEmailAndPassword("test@testing.com", "123456");

      user = userCred.user;

      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );
    });

    expect(login).toHaveBeenCalledWith("TTCSLICTiwNcdiwSAuIcFOZrLhf2", null);
  });
});
