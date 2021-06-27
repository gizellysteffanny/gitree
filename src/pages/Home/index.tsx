import React from 'react';

import { Brand, Title, Description } from './styles';
import ImgBrand from '../../assets/images/Brand.svg';

const Home: React.FC = () => {
  return (
    <main>
      <Brand src={ImgBrand} />
      <Title>Branch names with git flow structure</Title>
      <Description>
        Generate names for your branch from the title very quickly!
      </Description>
    </main>
  );
};

export default Home;
