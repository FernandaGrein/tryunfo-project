import React from 'react';

class SecondAtt extends React.Component {
  render() {
    return (
      <label htmlFor="secondAtt">
        Segundo Atributo:
        <input id="secondAtt" type="number" data-testid="attr2-input" />
      </label>
    );
  }
}

export default SecondAtt;
