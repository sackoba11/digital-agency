import React from "react";

const TextButton = (props) => {
  return (
    <div>
      <button
        className={`${
          props.className ?? "hover:text-black mt-10"
        } text-themegreen  text-sm font-semibold uppercase`}
      >
        {props.children}
      </button>
    </div>
  );
};

export default TextButton;
