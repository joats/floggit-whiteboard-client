import React from 'react';
import addComponentProps from './AddComponent.props';

const Add = (props) => {
  let inputTitle;
  let inputItem;
  let inputValues = [];
  const handleClick = () => {
    props.onAdd({ title: inputTitle.value, infoList: props.infoListItems, color: 'primary' });
    inputItem.value = '';
    inputTitle.value = '';
  };
  const handleClickInfoList = () => {
    props.onAddInfoListItem({ title: inputTitle.value, infoListItem: inputItem.value });
    inputItem.value = '';
    inputItem.focus();
  };

  const handleOnRemoveInfoListItem = index => () => {
    props.onRemoveInfoListItem(index);
  };

  const handleOnSaveInfoListItem = (index, values) => () => {
    props.onSaveInfoListItem(index, values);
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
        {props.infoListItems.map((infoItem, index) => {
          if (props.isEdit) {
            return (<div>
              <input
                defaultValue={infoItem}
                // eslint-disable-next-line
                key={infoItem+index}
                ref={c => inputValues.push(c)}
                type="text"
              />
              <button onClick={handleOnSaveInfoListItem(index, inputValues)}>save</button>
              <button onClick={handleOnRemoveInfoListItem(index)}>X</button>
            </div>
            );
          }
          return (<div>
            <input
              key={infoItem}
              defaultValue={infoItem}
              ref={(c) => { inputValues = c; }}
              readOnly="readonly"
            />
            <button onClick={handleOnRemoveInfoListItem(index)}>X</button>
          </div>);
        },
        )
        }
      </ul>
      <button onClick={handleClickInfoList}>addItem</button>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

Add.propTypes = addComponentProps;

export default Add;
