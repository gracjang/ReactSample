import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  decorators: [withKnobs],
};
const label = 'Colors';
const options = {
  Primary: 'hsl(49, 100%, 58%)',
  Secondary: 'hsl(196, 83%, 75%)',
  Tertiary: 'hsl(106, 47%, 64%)',
};
const defaultValue = 'hsl(49, 100%, 58%)';
const groupId = 'GROUP-ID1';

const selectColor = () => {
  return select(label, options, defaultValue, groupId);
};

export const Primary = () => {
  return <Button color={selectColor()}> Click me </Button>;
};
export const Secondary = () => {
  return (
    <Button color={selectColor()} secondary>
      Click me
    </Button>
  );
};
