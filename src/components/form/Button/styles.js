import styled from 'styled-components';

import { primaryDark } from '../../../styles/colors';

export const ButtonInput = styled.button`
  padding: ${props => props.loading ? "3px" : "10px"};
  margin: 8px 0 0;
  background-color: ${primaryDark};
  color: #fff;
  font-size: 16px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.loading ? primaryDark : "#303030"};
  }

  &:active {
    cursor: pointer;
    background-color: ${primaryDark};
  }

  &:focus {
    outline: none;
  }

`;

export const Label = styled.div``;

export const LoadingSection = styled.section``;
