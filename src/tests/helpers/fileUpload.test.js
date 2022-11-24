import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "cloudy-xdehgtfvch",
  api_key: "121233529315878",
  api_secret: "IDGqjn28QFfHzpQOkak7noG8yGM",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("Debe de cargar un archivo y retornar el URL", async () => {
    const resp = await fetch(
      "https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg"
    );
    const blob = await resp.blob();

    const file = new File([blob], "foto.jpg");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imageID = segments[segments.length - 1].replace(".jpg", "");
    cloudinary.v2.api.delete_resources(imageID, {}, () => {});
  });

  test("Debe de retornar un error", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
