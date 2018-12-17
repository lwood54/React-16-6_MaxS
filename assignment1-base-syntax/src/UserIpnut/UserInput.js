import React from 'react';

const userinput = props => {
  return (
    <div>
      <input
        type="text"
        onChange={props.changed}
        value={props.userName}
        style={props.style}
      />
    </div>
  );
};

export default userinput;
