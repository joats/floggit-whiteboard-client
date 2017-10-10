import React from 'react';
import addComponentProps from './AddComponent.props';

const Add = (props) => {
  console.log(props);
  let inputTitle;
  let inputItem;
  const handleClick = () => {
    props.onAdd({ title: inputTitle.value, infoList: props.infoListItems });
    inputTitle.value = '';
    inputItem.value = '';
  };
  const handleClickInfoList = () => {
    props.onAddInfoListItem(inputItem.value);
    inputItem.value = '';
    inputItem.focus();
  };
  return (
    <div>
      <input
        type="text"
        defaultValue={props.title}
        ref={(c) => { inputTitle = c; }}
      />
      <input
        name="inputItem"
        ref={(c) => { inputItem = c; }}
      />
      <ul>
        {props.infoListItems.map((infoItem) => {
          if (!props.isEdit) {
            console.log('in edit');
            return (
              <input defaultValue={infoItem} type="text" />
            );
          }
          return (<li>{infoItem}</li>);
        },
        )
        }
      </ul>
      <button onClick={handleClickInfoList}>addItem</button>
      <button onClick={handleClick} />
    </div>
  );
};

Add.propTypes = addComponentProps;

export default Add;
