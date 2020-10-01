import React from "react";
import PropTypes from "prop-types";

const Tags = ({ tags, color }) => {
  return (
    <div className="flex items-center justify-center my-4 text-center">
      {tags.map((tag) => (
        <span
          key={tag.id}
          className={
            "badge-teal inline-block rounded-full mx-1 px-2 uppercase font-semibold tracking-wide text-xs " +
            (color === "teal" ? "bg-teal-200 text-teal-600" : "")
          }
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tags;
