import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  `;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  padding: 20px 50px;
  display: flex;
  justify-content: space-around;
  background-color: #3470ff;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 20px 95px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 20px 128px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  line-height: 1.42857;
  text-decoration: none;
  color: #ffffff;
  margin-left: 10px;

  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    font-weight: bold;
  }
`;