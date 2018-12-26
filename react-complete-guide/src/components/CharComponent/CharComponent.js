import React from 'react';

const charComponent = props => {
  let randomNum1 = Math.floor(Math.random() * 255 + 1);
  let randomNum2 = Math.floor(Math.random() * 255 + 1);
  let randomNum3 = Math.floor(Math.random() * 255 + 1);

  let inlineStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
    cursor: 'pointer',
    backgroundColor: `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`
  };

  return (
    <p style={inlineStyle} onClick={props.click}>
      {props.charProp}
    </p>
  );
};

export default charComponent;
