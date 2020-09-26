import React from 'react';
import NotesView from 'views/Note/NotesView';
import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/Article/ArticlesView';
import TwittersView from 'views/Twitter/TwittersView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NotesView} />
          <Route path="/articles" component={ArticlesView} />
          <Route exact path="/twitters" component={TwittersView} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
