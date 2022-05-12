import React from 'react';

class ImageInput extends React.Component {
  render() {
    return (
      <label htmlFor="imageInput">
        Image URL:
        <input id="imageInput" type="text" data-testid="image-input" />
      </label>
    );
  }
}

export default ImageInput;
