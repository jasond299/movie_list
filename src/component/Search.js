import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/action";
import { useState } from "react/cjs/react.development";

const Input = styled.input`
  width: 200px;
  font-size: 16px;
  height: 30px;
  border: 1px solid red;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  margin-left: 10px;
  border-radius: 10px;
  background-color: red;
`;

function Search({ className }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div className={className}>
      <Input
        type={"text"}
        id="text"
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={() => dispatch(fetchData(text))}>Search</Button>
    </div>
  );
}

export default Search;
