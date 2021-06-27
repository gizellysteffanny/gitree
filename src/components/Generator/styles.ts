import styled from 'styled-components';

import selectIcon from '../../assets/images/icon-select.svg';
import copyIcon from '../../assets/images/icon-copy.svg';

export const Form = styled.form`
  margin-top: 32px;
`;

export const FormGroup = styled.fieldset`
  border: none;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  color: #818c8f;
  display: block;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const LabelResult = styled(Label)`
  color: #00bea4;
`;

export const Select = styled.select`
  border: 1px solid #e1e1e1;
  font-size: 14px;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding: 8px 10px;
  color: #1b2e35;

  -webkit-appearance: none;
  background-image: url(${selectIcon});
  background-size: 10px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: calc(100% - 16px);
`;

export const Option = styled.option``;

export const Input = styled.input`
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding: 8px 10px;
  color: #1b2e35;
`;

export const InputWithIcon = styled(Input)`
  background-image: url(${copyIcon});
  background-size: 14px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: calc(100% - 16px);
  cursor: pointer;
  border-color: #00bea4;
  color: #00bea4;
`;

export const FeedbackCopy = styled.small`
  margin: 0;
  font-size: 12px;
  color: #00bea4;
  font-weight: 500;
  opacity: 0;
  transition: opacity 1s ease-out;
`;
