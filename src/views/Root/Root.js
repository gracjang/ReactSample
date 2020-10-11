import React from 'react';
import NotesView from 'views/Notes/NotesView';
import MainTemplate from 'templates/MainTemplate';
import ArticlesView from 'views/Articles/ArticlesView';
import TwittersView from 'views/Twitters/TwittersView';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes/routes';
import DetailsView from '../Details/DetailsView';

const Root = () => {
  return (
    <MainTemplate>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route exact path={routes.notes} component={NotesView} />
          <Route path={routes.note} component={DetailsView} />
          <Route exact path={routes.articles} component={ArticlesView} />
          <Route path={routes.article} component={DetailsView} />
          <Route path={routes.twitter} component={DetailsView} />
          <Route exact path={routes.twitters} component={TwittersView} />
        </Switch>
      </BrowserRouter>
    </MainTemplate>
  );
};

export default Root;
