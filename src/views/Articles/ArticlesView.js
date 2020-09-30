import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import { ARTICLES } from 'Data/Consts';
import Card from 'components/molecules/Card/Card';

const ArticlesView = () => {
  return (
    <GridTemplate pageType="article">
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
    </GridTemplate>
  );
};

export default ArticlesView;
