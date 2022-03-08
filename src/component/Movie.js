import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 250px;
  width: 250px;
`;

const Poster = styled.img`
  height: 200px;
  width: 250px;
  vertical-align: middle;
`;

const Title = styled.div`
  height: 50px;
  text-align: center;
  background-color: red;
  color: white;
  font-weight: bold;
  font-size: 14px;
  vertical-align: middle;
  line-height: 50px;
`;

function Movie({ poster, title }) {
  return (
    <Container>
      <Poster src={poster} />
      <Title>{title}</Title>
    </Container>
  );
}

export default Movie;
