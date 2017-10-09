import React from 'react';

import infoProps from './InfoComponent.props';

const Info = props => (
  <div className="info">
    <h1>{props.header}</h1>
    <img className="logo" src={props.logo} alt="floggit!" />
    <div className="log-in">
      <div>{props.user}</div>
      <div>{props.department}</div>
    </div>
  </div>
);

Info.propTypes = infoProps;

export default Info;
