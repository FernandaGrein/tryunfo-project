import React from 'react';

class FirstAtt extends React.Component {
  render() {
    return (
      <label htmlFor="firstAtt">
        Primeiro Atributo:
        <input id="firstAtt" type="number" data-testid="attr1-input" />
      </label>
    );
  }
}

export default FirstAtt;
