import React from 'react';

import addComponentProps from './AddComponent.props';

const Add = (props) => {
  const handleClick = () => {
    props.onAdd({ title: 'hdhdh', infoList: ['mdmd'] });
  };

  return (
    <div>
      <button type="button" onClick={handleClick} />
    </div>
  );
};

Add.propTypes = addComponentProps;

export default Add;
