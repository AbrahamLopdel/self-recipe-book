import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  const initialState = {
    uid: "326gr3487763trewdsDW",
    name: "Abraham López Delgado",
  };

  test("Debe de hacer el login y devolver el objeto con los credenciales", () => {
    const obj = {
      type: types.login,
      payload: {
        uid: "326gr3487763trewdsDW",
        displayName: "Abraham López Delgado",
      },
    };

    expect(authReducer({}, obj).uid).toEqual(obj.payload.uid);
    expect(authReducer({}, obj).name).toEqual(obj.payload.displayName);
  });

  test("Debe de hacer el logout y devolver el objeto vacío", () => {
    const obj = {
      type: types.logout,
    };

    expect(authReducer(initialState, obj)).toEqual({});
  });

  test("Debe de hacer el default y devolver el state", () => {
    const obj = {
      type: null,
    };

    expect(authReducer(initialState, obj)).toEqual(initialState);
  });
});
