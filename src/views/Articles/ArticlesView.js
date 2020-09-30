import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import { ARTICLES } from 'Data/Consts';
import Card from 'components/molecules/Card/Card';

const ArticlesView = () => {
  return (
    <UserPageTemplate pageType="article">
      {ARTICLES.map((article) => (
        <Card
          key={article.id}
          title={article.title}
          created={article.created}
          content={article.content}
          articleUrl={article.articleUrl}
          cardType="article"
        />
      ))}
    </UserPageTemplate>
  );
};

export default ArticlesView;
