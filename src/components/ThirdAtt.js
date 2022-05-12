import React from 'react';

class ThirdAtt extends React.Component {
  render() {
    return (
      <label htmlFor="thirdAtt">
        Terceiro Atributo:
        <input id="thirdAtt" type="number" data-testid="attr3-input" />
      </label>
    );
  }
}

export default ThirdAtt;
