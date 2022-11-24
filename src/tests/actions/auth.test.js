import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";

import {
  login,
  logout,
  startLoginEmailPassword,
  startLogout,
} from "../../actions/auth";
import { startLoading } from "../../actions/ui";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {};

let store = mockStore(initialState);

describe("Purebas en auth", () => {
  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("Debe de hacer el login", () => {
    const uid = "sajhd832u4oernUHAYGdas";
    const displayName = "George";

    expect(login(uid, displayName)).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName,
      },
    });
  });

  test("Debe de hacer el logout", () => {
    expect(logout()).toEqual({
      type: types.logout,
    });
  });

  test("Debe de realizar el startLogout", async () => {
    await store.dispatch(startLogout());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLogoutCleaning,
    });

    expect(actions[1]).toEqual({
      type: types.logout,
    });
  });

  test("Debe de iniciar el startLoginEmailPassword", async () => {
    await store.dispatch(startLoginEmailPassword("test@testing.com", "123456"));

    const actions = store.getActions();
    console.log(actions);

    expect(actions[0].type).toBe(types.uiStartLoading);
    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: "TTCSLICTiwNcdiwSAuIcFOZrLhf2",
        displayName: null,
      },
    });
  });
});
