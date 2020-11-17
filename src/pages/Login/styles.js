import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import { primaryDark } from '../../styles/colors';

export const Container = styled.div`
  min-height: 100%;
  margin-bottom: -45px;
  overflow: hidden;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const LoginFormContainer = styled.div`
  padding-top: 150px !important;
  //padding-top: 120px !important; Mobile
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
`;

export const IconContainer = styled.div`
  border: 3px solid ${primaryDark};
  border-radius: 100px;
  padding: 10px;
  margin: 5px 0 15px;
`;

export const Footer = styled.div`
  position: relative;
  font-size: 12px;
  text-align: center;
  margin: 15px 0;
`;

export const Bold = styled.b``;

export const LoadingSection = styled.section`
  position: absolute;
  color: ${primaryDark};
  z-index: -1;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F7F7F7;
  pointer-events: ${props => props.loading ? "none" : "all"};
  opacity: ${props => props.loading ? 0 : 1};
  transition: .15s all linear;
  transform: ${props => props.loading ? "scale(2)" : "scale(1)"};
`;