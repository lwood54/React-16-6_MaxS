import React from 'react';

const charComponent = props => {
  let inlineStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    cursor: 'pointer'
  };
  return (
    <p style={inlineStyle} onClick={props.click}>
      {props.charProp}
    </p>
  );
};

export default charComponent;
