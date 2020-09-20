import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'components/GlobalStyle/GlobalStyle';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <h1>Hejka Gracjan</h1>
      <Button>This is button</Button>
      <Button secondary>Reset</Button>
    </div>
  );
};

export default Root;
