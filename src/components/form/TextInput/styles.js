import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  border: none;
  width: 225px;
  padding-left: 10px;
  margin: 8px 0;
  background-color: #fff;
  display: flex;
  height: 35px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid black;
`;

export const Input = styled.input`
  border: none;
  flex: 1;
  border-left: 1px solid black;
  border-radius: 0;
  padding: 10px;
  margin-left: 10px;
  &:focus {
    outline: none;
  }
`;
