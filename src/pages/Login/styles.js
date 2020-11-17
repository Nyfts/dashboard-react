import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 7px 7px 23px -13px rgba(0,0,0,0.75);
`;

export const IconContainer = styled.div`
  border: 3px solid black;
  border-radius: 100px;
  padding: 10px;
  margin: 5px 0 15px;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
`;

export const Bold = styled.b``;