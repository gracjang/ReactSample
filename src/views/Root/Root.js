import React from 'react';
import NotesView from 'views/Notes/NotesView';
import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/Articles/ArticlesView';
import TwittersView from 'views/Twitters/TwittersView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NotesView} />
          <Route path="/articles" component={ArticlesView} />
          <Route path="/twitters" component={TwittersView} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
