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
// define an arrow function that can receive the wrapped component object and
const withClass = (WrappedComponent, className) => {
  console.log(
    'INSIDE withClass!!!: className = ',
    className,
    'typeof: ',
    typeof className
  );
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />{' '}
          {/* you can just pass on any props that are found in the component object*/}
        </div>
      );
    }
  };

  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardedRef={ref} />;
  });
};

export default withClass;
