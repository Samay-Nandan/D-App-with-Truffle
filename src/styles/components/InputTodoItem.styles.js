import styled from "styled-components"

export const TodoForm = styled.form`
  border-radius: 100px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.38);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px;
`;

export const TodoInput = styled.input`
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  padding-right: 5px;
  padding-left: 20px;
  border-radius: 100px;
  height: 45px;
  outline: none;
  border: none;
`

export const TodoButton = styled.button`
  background: transparent;
  color: #5b5b5b;
  cursor: pointer;
  font-weight: 600;
  margin-right: 10px;
  height: 45px;
  outline: none;
  border: none;
`