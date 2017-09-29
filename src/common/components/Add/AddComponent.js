import React from 'react';

import addComponentProps from './AddComponent.props';

const Add = (props) => {
  const handleClick = (func) => {
    props.onAdd(func);
  };

  return (
    <div>
      <button type="button" onClick={handleClick} />
    </div>
  );
};

Add.propTypes = addComponentProps;

export default Add;
