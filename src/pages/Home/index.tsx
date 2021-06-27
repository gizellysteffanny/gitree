import React from 'react';

import logoImg from '../../assets/images/Brand.svg';

import { Brand, Title, Description } from './styles';

import Generator from '../../components/Generator';

const Home: React.FC = () => {
  return (
    <main>
      <Brand src={logoImg} />
      <Title>Branch names with git flow structure</Title>
      <Description>
        Generate names for your branch from the title very quickly!
      </Description>

      <Generator />
    </main>
  );
};

export default Home;
