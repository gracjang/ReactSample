import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import { TWITTERS } from 'Data/Consts';
import Card from 'components/molecules/Card/Card';

const TwittersView = () => {
  return (
    <GridTemplate pageType="twitter">
      {TWITTERS.map((twitter) => (
        <Card
          key={twitter.id}
          title={twitter.title}
          created={twitter.created}
          content={twitter.content}
          twitterName={twitter.twitterName}
          cardType="twitter"
        />
      ))}
    </GridTemplate>
  );
};

export default TwittersView;
