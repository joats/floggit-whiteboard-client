import React from 'react';

import addComponentProps from './AddComponent.props';

const Add = (props) => {
  const handleClick = () => {
<<<<<<< HEAD
    props.onAdd({ title: 'hdhdh', infoList: ['mdmd'] });
=======
    props.onAdd({ title: 'hdhdh', infoList:['mdmd'] });
>>>>>>> 2569e04b198798ff71994a3c7230ca3d7ef57108
  };

  return (
    <div>
      <button type="button" onClick={handleClick} />
    </div>
  );
};

Add.propTypes = addComponentProps;

export default Add;
