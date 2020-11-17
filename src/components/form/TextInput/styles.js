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

export const Divisor = styled.div`
  margin-left: 10px;
  width: .08px;
  background-color: #000;
  height: 100%;
`;

export const Input = styled.input`
  border: none;
  flex: 1;
  padding: 10px;
  margin-left: 5px;
  &:focus {
    outline: none;
  }
`;
