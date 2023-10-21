import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Hero,
  Text,
  Button
} from './MainSection.styled';

export const MainSection = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate('/catalog');
  };

  return (
    <>
      <Hero>
        <Text>Journey with Confidence and Comfort</Text>
        <Button onClick={handleNav}>Your Comfort Now</Button>
      </Hero>
    </>
  );
};