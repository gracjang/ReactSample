import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import { TWITTERS } from 'Data/Consts';
import Card from 'components/molecules/Card/Card';

const TwittersView = () => {
  return (
    <GridTemplate pageType="twitters">
      {TWITTERS.map((twitter) => (
        <Card
          key={twitter.id}
          title={twitter.title}
          created={twitter.created}
          content={twitter.content}
          twitterName={twitter.twitterName}
          cardType="twitters"
        />
      ))}
    </GridTemplate>
  );
};

export default TwittersView;
