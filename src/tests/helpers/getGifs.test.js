import { getGifs } from "../../helpers/getGifs";

describe("pruebas con getGifs Fetch", () => {
  test("debe traer 3 elementos", async () => {
    const gifs = await getGifs("Goku");

    expect(gifs.length).toBe(3);
  });

  test("debe devolver un arreglo vacío", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
