import styled from 'styled-components';

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 16px 16px 16px rgba(0, 123, 103, 0.08);
  padding: 24px;

  max-width: 1184px;
  margin: 0 auto;
  padding: 56px;

  @media only screen and (max-width: 700px) {
    display: block;
    padding: 24px;
  }
`;

export const FlexItemForm = styled.div`
  margin-right: 80px;

  @media only screen and (max-width: 700px) {
    margin-right: 0px;
  }
`;

export const FlexItemImg = styled.div``;

export const Brand = styled.img`
  width: 96px;
  margin-bottom: 24px;
  height: auto;
`;

export const Title = styled.h1`
  color: #1b2e35;
  font-size: 32px;
  font-weight: 600;
  line-height: calc(32px * 1.2);
  margin-bottom: 16px;

  @media only screen and (max-width: 700px) {
    font-size: 20px;
    line-height: calc(20px * 1.2);
  }
`;

export const Description = styled.p`
  color: #1b2e35;
  font-size: 17px;
  font-weight: 300;
  line-height: calc(17px * 1.2);

  @media only screen and (max-width: 700px) {
    font-size: 13px;
    line-height: calc(13px * 1.2);
  }
`;

export const Image = styled.img`
  user-select: none;
  max-width: 400px;

  @media only screen and (max-width: 700px) {
    display: none;
  }

  @media only screen and (min-width: 700px) and (max-width: 990px) {
    max-width: 300px;
  }

  @media only screen and (min-width: 1056px) {
    max-width: 500px;
  }
`;
