import { shallow } from "enzyme";
import { types } from "../../types/types";

describe("Pruebas en types", () => {
  test("El objeto tiene que ser igual a obj", () => {
    const obj = {
      login: "[Auth] Login",
      logout: "[Auth] Logout",

      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",
      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",

      notesAddNew: "[Notes] New note",
      noteActive: "[Notes] Set active note",
      notesLoad: "[Notes] Load notes",
      noteUpdated: "[Notes] Updated note",
      notesFileUrl: "[Notes] Updated image url",
      notesDelete: "[Notes] Delete note",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    };
    expect(types).toEqual(obj);
  });
});
