import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  //   const [categories, setCategories] = useState(["Goku"]);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <br />
      <AddCategory setCategories={setCategories} />
      <br />
      {categories.map((value, index) => (
        <GifGrid key={value} category={value} />
      ))}
    </Fragment>
  );
};

export default GifExpertApp;
