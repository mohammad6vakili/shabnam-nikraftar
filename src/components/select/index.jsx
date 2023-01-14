import React from "react";
import "./style.css";
import Select from "react-select";

const SelectComponent = ({
  data,
  value,
  setValue,
  searchable,
  placeHolder,
}) => {
  return (
    <Select
      className="mv-select"
      options={data}
      onChange={setValue}
      value={value}
      searchable={searchable}
      placeholder={placeHolder}
    />
  );
};
export default SelectComponent;
