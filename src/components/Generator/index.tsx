import React from 'react';

import {
  Form,
  FormGroup,
  Label,
  LabelResult,
  Select,
  Option,
  Input,
  InputWithIcon,
  FeedbackCopy,
} from './styles';

const Generator: React.FC = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Type branch</Label>
        <Select>
          <Option>BugFix</Option>
          <Option>Engineering</Option>
          <Option>Feature</Option>
          <Option>HotFix</Option>
          <Option>Release</Option>
          <Option>Technical</Option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>Title</Label>
        <Input placeholder="ex: relayout screen login" />
      </FormGroup>

      <FormGroup className="result-branch-name">
        <LabelResult>your branch name:</LabelResult>
        <InputWithIcon readOnly />
        <FeedbackCopy>Copied to clipboard!</FeedbackCopy>
      </FormGroup>
    </Form>
  );
};

export default Generator;
