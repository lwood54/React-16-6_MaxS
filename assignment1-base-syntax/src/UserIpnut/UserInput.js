import React from 'react';

const userinput = props => {
  return (
    <div>
      <input
        type="text"
        onChange={props.changed}
        placeholder={props.userName}
        style={props.style}
      />
    </div>
  );
};

export default userinput;
