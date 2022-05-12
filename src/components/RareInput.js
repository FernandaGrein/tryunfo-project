import React from 'react';

class RareInput extends React.Component {
  render() {
    return (
      <label htmlFor="rareInput">
        qual a raridade da carta:
        <select id="rareInput" data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
      </label>
    );
  }
}

export default RareInput;
