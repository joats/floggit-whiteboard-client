import React from 'react';

import noteProps from './Note.props';
import DropdownMenu from './components/DropdownMenu';
import AddComponent from '../../../Add';

const Note = (props) => {
  let isEdit = false;
  const handleClick = (value) => {
    console.log(isEdit);
    isEdit = value;
    props.onEdit({ id: props.note.id, title: 'hellomddmdmdmdmdm', infoList: [...props.note.infoList, 'listItem2'], color: props.note.color });
  };

  const generateNote = (note, onRemove, onChangeColor, onEdit) => (
    <div className={note.color}>
      <DropdownMenu titles={['edit', 'remove', 'change color']} colors={['primary', 'secondary', 'tertiary', 'quaternary']} note={note} onEdit={onEdit} onRemove={onRemove} onChangeColor={onChangeColor} />
      <h1>
        {note.title}
      </h1>
      <ul>
        {note.infoList.map(info => (
          <li key={info}>
            {info}
          </li>))}
      </ul>
    </div>
  );

  const generateEditableNote = (note, onAddInfoListItem) => (
    <AddComponent
      title={note.title}
      infoListItems={note.infoList}
      onAddInfoListItem={onAddInfoListItem}
      onEdit={isEdit}
    />
  );

  return (<div>
    {
      generateEditableNote(props.note)
    }
    {generateNote(props.note, props.onRemove, props.onChangeColor, handleClick)}
  </div>
  );
};

Note.propTypes = noteProps;

export default Note;
