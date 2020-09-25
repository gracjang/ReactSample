import React from 'react';
import Card from './Card';

export default {
  title: './Card',
  component: Card,
};

export const Note = () => {
  return <Card />;
};

export const Twitter = () => {
  return <Card cardType="twitter" />;
};

export const Article = () => {
  return <Card cardType="article" />;
};
