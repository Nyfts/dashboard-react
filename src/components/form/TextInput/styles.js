import styled from 'styled-components';

import { primaryGrey } from '../../../styles/colors';

export const Container = styled.div`
  border: none;
  padding-left: 15px;
  margin: 8px 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${primaryGrey};
`;

export const Input = styled.input`
  border: none;
  flex: 1;
  border-left: 1px solid ${primaryGrey};
  border-radius: 0;
  font-size: 14px;
  padding: 13px;
  margin-left: 15px;
  &:focus {
    outline: none;
  }
`;
