import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { startUploading } from "../../actions/notes";
import { db } from "../../firebase/firebaseConfig";
import { fileUpload } from "../../helpers/fileUpload";

jest.mock("../../helpers/fileUpload", () => ({
  fileUpload: jest.fn(() => {
    return "https://holamundo.com/foto.jpg";
    // return Promise.resolve('https://holamundo.com/foto.jpg')
  }),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  auth: {
    uid: "TESTING",
  },
  notes: {
    active: {
      id: "cdNvUdgztm8MP38Fddml",
      title: "Hola",
      body: "Mundo",
    },
  },
};

let store = mockStore(initialState);

describe("Prueba de subida de archivo en notes", () => {
  test("startUploading debe de actualizar el url del entry", async () => {
    // jest.setTimeout(10000);
    const file = new File([], "foto.jpg");

    await store.dispatch(startUploading(file));

    const docRef = await db
      .doc(`/TESTING/journal/notes/cdNvUdgztm8MP38Fddml`)
      .get();

    expect(docRef.data().url).toBe("https://holamundo.com/foto.jpg");
  });
});
