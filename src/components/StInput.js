import React from 'react';

class StInput extends React.Component {
  render() {
    return (
      <label htmlFor="checkboxInput">
        Essa carta é um Super Trunfo?
        <input id="checkboxInput" type="checkbox" data-testid="trunfo-input" />
      </label>
    );
  }
}

export default StInput;
