import React from "react";
import "./../../ViewAutocomplete/style";

export const InputForm = ({
  handleChange,
  handleKeyDown,
  inputRef,
  customClass,
}) => (
  <form>
    <input
      name="input-search"
      type="text"
      placeholder="Search..."
      onChange={handleChange}
      className={customClass}
      onKeyDown={(e) => handleKeyDown(e)}
      autoComplete="off"
      ref={inputRef}
    />
  </form>
);
