import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';
import { NOTES } from 'Data/Consts';

const NotesView = () => {
  return (
    <UserPageTemplate pageType="note">
      {NOTES.map((note) => (
        <Card
          key={note.id}
          title={note.title}
          created={note.created}
          content={note.content}
          cardType="note"
        />
      ))}
    </UserPageTemplate>
  );
};

export default NotesView;
