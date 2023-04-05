import styled from "styled-components"

export const TextInput = styled.input`
  text-align: center;
  width: 100%;
  outline: none;
  border: none;
  &:focus {
    border-bottom: 2px solid #eaeaea;
  }
`

export const CheckboxInput = styled.input`
  position: relative;
  width: 1.5em;
  height: 1.5em;
  color: #363839;
  border: 1px solid #bdc1c6;
  border-radius: 4px;
  appearance: none;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 2px;
    left: 5px;
    width: 4px;
    height: 9px;
    border-style: solid;
    border-color: #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  &:checked {
    color: #fff;
    border-color: #06842c;
    background: #06842c;
  }
`

export const DeleteTodoButton = styled.button`
  background: #f1f3f4;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`