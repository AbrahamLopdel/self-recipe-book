import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import { types } from "../../../types/types";
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

describe("Pruebas en RegisterScreen", () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <RegisterScreen />
      </MemoryRouter>
    </Provider>
  );

  test("Debe de realizarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de hacer el dispatch de la acción respectiva", () => {
    const emailField = wrapper.find('input[name="email"]');

    emailField.simulate("change", {
      target: {
        value: "",
        name: "email",
      },
    });

    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: "El email no es válido",
    });
  });

  test("Debe de mostrar el div de alerta con el error", () => {
    const initialState = {
      auth: {},
      ui: {
        loading: false,
        msgError: "El email no es correcto",
      },
    };

    let store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <RegisterScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(".auth__alert-error").exists()).toBe(true);
    expect(wrapper.find(".auth__alert-error").text().trim()).toBe(
      initialState.ui.msgError
    );
  });
});
