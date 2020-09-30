import React from 'react';
import NotesView from 'views/Notes/NotesView';
import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/Articles/ArticlesView';
import TwittersView from 'views/Twitters/TwittersView';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import DetailsView from '../Details/DetailsView';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/notes" />} />
          <Route exact path="/notes" component={NotesView} />
          <Route path="/notes/:id" component={DetailsView} />
          <Route exact path="/articles" component={ArticlesView} />
          <Route path="/articles:1" component={DetailsView} />
          <Route path="/twitters:1" component={DetailsView} />
          <Route exact path="/twitters" component={TwittersView} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
