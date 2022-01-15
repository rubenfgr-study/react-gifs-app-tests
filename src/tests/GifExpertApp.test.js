import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("GifExpertApp Test", () => {
  test("GifExpertApp test snapshoot", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar una lista de categories", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
