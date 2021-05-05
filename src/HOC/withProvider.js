import React from "react";

const withProvider = (Provider, ...extras) => {
  return (Component) => {
    return class extends React.PureComponent {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <Provider {...extras}>
            <Component {...this.props} />
          </Provider>
        );
      }
    };
  };
};

export default withProvider;
