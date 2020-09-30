import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import { TWITTERS } from 'Data/Consts';
import Card from 'components/molecules/Card/Card';

const TwittersView = () => {
  return (
    <UserPageTemplate pageType="twitter">
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
    </UserPageTemplate>
  );
};

export default TwittersView;
