import React from "react";
import styled from "@emotion/styled";
import Search from "../../static/assets/search.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
`;
const Input = styled.input`
  background: transparent;
  border: none;
  color: white;
  &::placeholder {
      color: #ffffff;
      opacity: 0.75;
  }
`;

const SearchBar = () => {
  return (
    <Wrapper>
      <Search height={"20px"} />
      <Input type="text" placeholder="search" />
    </Wrapper>
  );
};

export default SearchBar;
