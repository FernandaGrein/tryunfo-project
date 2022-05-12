import React from 'react';
import DescriptionInput from './DescriptionInput';
import FirstAtt from './FirstAtt';
import ImageInput from './ImageInput';
import NameInput from './NameInput';
import RareInput from './RareInput';
import SecondAtt from './SecondAtt';
import StInput from './StInput';
import ThirdAtt from './ThirdAtt';

class Form extends React.Component {
  render() {
    return (
      <>
        <p>Adicionar nova carta</p>
        <NameInput />
        <DescriptionInput />
        <FirstAtt />
        <SecondAtt />
        <ThirdAtt />
        <ImageInput />
        <RareInput />
        <StInput />
        <button type="button" data-testid="save-button"> Salvar</button>
      </>);
  }
}

export default Form;
