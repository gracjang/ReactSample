import React from 'react';
import Heading from './Heading';

export default {
  title: './Heading',
  component: Heading,
};

export const Normal = () => {
  return <Heading>Siemandero</Heading>;
};

export const Big = () => {
  return <Heading big>Siemandero</Heading>;
};
