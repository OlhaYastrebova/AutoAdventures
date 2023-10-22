import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: color 250ms linear;

  &:hover {
    color: #0b44cd;
  }
`;