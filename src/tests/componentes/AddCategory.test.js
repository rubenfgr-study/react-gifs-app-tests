import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el component AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe cambiar el input", () => {
    const input = wrapper.find("input");
    const value = "hello world";

    input.simulate("change", { target: { value } });

    const h3 = wrapper.find("h3");
    expect(h3.text().trim()).toBe(value);
  });

  test("no debe de mostrar la información on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalledTimes(0);
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    wrapper.find("input").simulate("change", { target: { value: "abc" } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
