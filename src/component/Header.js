import React from "react";
import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
  background-color: #ff7f3f;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 60px;
  font-size: 24px;
  font-weight: bold;
`;

const SearchButton = styled(Search)`
  margin-right: 40px;
  color: yellow;
`;

function Header({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <SearchButton />
    </Container>
  );
}

export default Header;
