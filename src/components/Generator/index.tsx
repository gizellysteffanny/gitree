/* eslint-disable no-useless-escape */

import React, { FormEvent, useState, useEffect } from 'react';

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
  const [typeBranch, setTypeBranch] = useState('Bugfix');
  const [title, setTitle] = useState('');
  const [branchName, setBranchName] = useState('');
  const [copyText, setCopyText] = useState(false);

  function handleCopy(): void {
    if (title.length > 0) {
      const copy = document.getElementById('branch-name') as HTMLInputElement;
      copy.select();
      copy.setSelectionRange(0, 99999);
      document.execCommand('copy');

      setCopyText(true);

      setTimeout(() => setCopyText(false), 2000);
    }
  }

  function handleGenerate(): void {
    const text = title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[(\,|\.|\;|\:)]/gi, '')
      .toLowerCase()
      .trim();

    const titleFormatted = text.replace(/ +/g, ' ').replace(/\s/g, '-');

    const name = `${typeBranch.toLowerCase()}/${titleFormatted}`;

    if (title.length > 0) {
      setBranchName(name);
    } else {
      setBranchName('');
    }
  }

  useEffect(() => {
    handleGenerate();
  }, [title, typeBranch]);

  return (
    <Form>
      <FormGroup>
        <Label>Type branch</Label>
        <Select
          value={typeBranch}
          onChange={(e) => setTypeBranch(e.target.value)}
        >
          <Option value="Bugfix">Bugfix</Option>
          <Option value="Engineering">Engineering</Option>
          <Option value="Feature">Feature</Option>
          <Option value="Hotfix">Hotfix</Option>
          <Option value="Release">Release</Option>
          <Option value="Technical">Technical</Option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>Title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="ex: relayout screen login"
        />
      </FormGroup>

      <FormGroup className="result-branch-name" onClick={handleCopy}>
        <LabelResult show={title.length > 0}>your branch name:</LabelResult>
        <InputWithIcon
          show={title.length > 0}
          id="branch-name"
          readOnly
          value={branchName}
        />
        <FeedbackCopy show={copyText}>Copied to clipboard!</FeedbackCopy>
      </FormGroup>
    </Form>
  );
};

export default Generator;
