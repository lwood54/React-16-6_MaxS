// import React from 'react';
import React, { Component } from 'react';

//////////////////  you can return a stateless funcitonal component as the wrapper component /////////////////////////
// const withClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props} />{' '}
//       {/* you can just pass on any props that are found in the component object*/}
//     </div>
//   );
// };

//////////////////  you can also return a stateful class based component as the wrapper component /////////////////////////
const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />{' '}
          {/* you can just pass on any props that are found in the component object*/}
        </div>
      );
    }
  };
};

export default withClass;
