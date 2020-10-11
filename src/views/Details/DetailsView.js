import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes/routes';

const DetailsView = ({ match }) => {
  return (
    <DetailsTemplate>
      <p>{`is twitters: ${match.path === routes.twitter}`}</p>
    </DetailsTemplate>
  );
};

export default DetailsView;
