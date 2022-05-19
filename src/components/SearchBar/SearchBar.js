import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchLocation from "../SearchLocation/SearchLocation";
import Button from "../Button/Button";

import "./SearchBar.css";

const SearchBar = ({
  isChecked,
  onCheckboxChange,
  onFormSubmit,
  searchLocation,
  onLocationInputChange,
}) => {
  return (
    <form className="search-bar" onSubmit={onFormSubmit}>
      <SearchLocation
        style={{ borderLeft: "1px solid grey" }}
        searchLocation={searchLocation}
        onLocationInputChange={onLocationInputChange}
      />
      <FilterCheckbox
        label="Electrician"
        isChecked={isChecked}
        onCheckboxChange={onCheckboxChange}
      />
        <FilterCheckbox
            label="Plumbing"
            isChecked={isChecked}
            onCheckboxChange={onCheckboxChange}
        />
        <FilterCheckbox
            label="Dry Cleaning"
            isChecked={isChecked}
            onCheckboxChange={onCheckboxChange}
        />
        <FilterCheckbox
            label="Cleaning"
            isChecked={isChecked}
            onCheckboxChange={onCheckboxChange}
        />
      <Button buttonStyle={"btn--primary"}>Search</Button>
    </form>
  );
};

export default SearchBar;
