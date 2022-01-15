import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("GifGrid Test", () => {
  const category = "category";

  test("GifGrid test snapshoot", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar items cuando se cargan imágenes useFetchGifs", () => {
    const gifs = [
      { id: "abc", url: "https://localhost/img.jpg", title: "ABC" },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBeFalsy();
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
