import styled from 'styled-components';

export const ContainerFlex = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 16px 16px 16px rgba(0, 123, 103, 0.08);
  padding: 24px;

  max-width: 1184px;
  margin: 0 auto;
  padding: 56px;
  /* height: 809px; */
`;

export const FlexItemForm = styled.div`
  margin-right: 80px;
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
`;

export const Description = styled.p`
  color: #1b2e35;
  font-size: 17px;
  font-weight: 300;
  line-height: calc(17px * 1.2);
`;

export const Image = styled.img`
  user-select: none;
  max-width: 500px;
`;
