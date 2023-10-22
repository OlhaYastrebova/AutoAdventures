import React from 'react';
import { Container, Header, StyledNavLink } from './HeaderBar.styled';

export const HeaderBar = () => {
  return (
    <Header>
      <Container>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </Container>
    </Header>
  );
};
