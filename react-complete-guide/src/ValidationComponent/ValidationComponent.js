import React from 'react';

const validationComponent = props => {
  let validationOutput = null;
  if (props.inputLength >= 5) {
    validationOutput = <p>A length of {props.inputLength} is long enough.</p>;
  } else {
    validationOutput = <p>A length of {props.inputLength} is too short.</p>;
  }
  return <div>{validationOutput}</div>;
};

export default validationComponent;
