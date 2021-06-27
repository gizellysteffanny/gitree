import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import ilustration from '../../assets/images/ilustration.svg';

import {
  ContainerFlex,
  FlexItemForm,
  FlexItemImg,
  Brand,
  Title,
  Description,
  Image,
} from './styles';

import Generator from '../../components/Generator';

const Home: React.FC = () => {
  return (
    <ContainerFlex>
      <FlexItemForm>
        <Brand src={logoImg} />
        <Title>Branch names with git flow structure</Title>
        <Description>
          Generate names for your branch from the title very quickly!
        </Description>

        <Generator />
      </FlexItemForm>

      <FlexItemImg>
        <Image src={ilustration} />
      </FlexItemImg>
    </ContainerFlex>
  );
};

export default Home;
