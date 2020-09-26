import React from 'react';
import NoteView from 'views/Note/NoteView';
import MainTemplate from 'templates/MainTemplate';
import ArticleView from 'views/Article/ArticleView';
import TwitterView from 'views/Twitter/TwitterView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NoteView} />
          <Route path="/articles" component={ArticleView} />
          <Route exact path="/twitters" component={TwitterView} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
