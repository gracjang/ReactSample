import React from 'react';
import Card from 'components/molecules/Card/Card';
import { NOTES } from 'Data/Consts';
import GridTemplate from '../../templates/GridTemplate';

const NotesView = () => {
  return (
    <GridTemplate pageType="note">
      {NOTES.map((note) => (
        <Card
          key={note.id}
          title={note.title}
          created={note.created}
          content={note.content}
          cardType="note"
        />
      ))}
    </GridTemplate>
  );
};

export default NotesView;
