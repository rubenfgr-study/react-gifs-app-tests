import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("GifGridItem Test", () => {
  const title = "Title";
  const url = "http://localhost";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("GifGridItem test snapshoot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe tener una imagen  con el src = url y alt = title", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe tener animate_fadeIn", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("animate__animated")).toBe(true);
  });
});
