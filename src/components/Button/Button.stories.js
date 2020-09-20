import React from 'react';
import Button from './Button';

export default {
  title: './Button',
  component: Button,
};

export const Primary = () => <Button> Click me </Button>;
export const Secondary = () => <Button secondary> Click me </Button>;
