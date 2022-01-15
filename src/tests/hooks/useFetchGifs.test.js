import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("useFetchGifs Test", () => {
  test("debe retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate(); // espera después de la petición
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("debe retornar un arreglo de imgs y el loading a false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
