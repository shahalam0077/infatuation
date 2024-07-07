import React from "react";
import "../../../css/header.css";
import SearchIcon from "@mui/icons-material/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { IconButton } from "@mui/material";


const Search = () => {
  return (
    <div className="search-form">
      <InputGroup className="mb-2">
        <input className="search-input"></input>
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        {/* <SearchIcon fontSize="medium" style={{ marginLeft: "5px" }} /> */}
        <IconButton aria-label="search">
        <SearchIcon />
      </IconButton>
      </InputGroup>
    </div>
  );
};

export default Search;
