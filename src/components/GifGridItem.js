import "animate.css";
import propTypes from "prop-types";
import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInRight">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.prototypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};
