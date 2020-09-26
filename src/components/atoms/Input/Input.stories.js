import React from 'react';
import Input from './Input';

export default {
  title: 'atoms/Input',
  component: Input,
};

export const Normal = () => {
  return <Input placeholder="login" />;
};

export const Search = () => {
  return <Input placeholder="search" search />;
};
