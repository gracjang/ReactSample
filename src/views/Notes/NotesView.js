import React from 'react';
import Card from 'components/molecules/Card/Card';
import { NOTES } from 'Data/Consts';
import GridTemplate from '../../templates/GridTemplate';

const NotesView = () => {
  return (
    <GridTemplate pageType="notes">
      {NOTES.map((note) => (
        <Card
          key={note.id}
          title={note.title}
          created={note.created}
          content={note.content}
          cardType="notes"
        />
      ))}
    </GridTemplate>
  );
};

export default NotesView;
