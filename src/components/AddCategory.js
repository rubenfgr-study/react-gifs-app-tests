import pt from "prop-types";
import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    console.log("handleInputchange launch");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{inputValue}</h3>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: pt.func.isRequired,
};
