import { mount } from "enzyme";
import { Provider } from "react-redux";
import { LoginScreen } from "./../../../components/auth/LoginScreen";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initialState);

store.dispatch = jest.fn();

describe("Pruebas en LoginScreen", () => {
  beforeEach(() => {
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </Provider>
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de disparar la acción startGoogleLogin", () => {
    wrapper.find(".auth__social-network").prop("onClick")();

    expect(startGoogleLogin).toHaveBeenCalled();
  });

  test("Debe de disparar el startLogin con los respectivos argumentos", () => {
    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });

    expect(startLoginEmailPassword).toHaveBeenCalledWith(
      "recetas@gmail.com",
      "123456"
    );
  });
});
