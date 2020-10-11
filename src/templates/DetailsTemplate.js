import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import { Link } from 'react-router-dom';

const DetailsTemplate = ({ children }) => {
  return (
    <UserPageTemplate>
      {children}
      <Link to="/">go back</Link>
    </UserPageTemplate>
  );
};

export default DetailsTemplate;
