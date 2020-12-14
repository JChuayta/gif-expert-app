import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AddCategory({ setCategory }) {
  const [inputvalue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputvalue.trim().length > 2) {
      setCategory((cats) => [inputvalue,...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputvalue} onChange={handleInputValue} />
    </form>
  );
}
AddCategory.propType = {
  setCategory: PropTypes.func.isRequired,
};
