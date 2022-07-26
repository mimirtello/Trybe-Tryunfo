import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  }

  validation= () =>{
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare } = this.state;
    const campoVazio = !!cardName && !!cardDescription && !!cardImage && !!cardRare;
    const maiorQue = parseInt(cardAttr1, 10)
          + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10) <= 210
    const menorQueZeroa1 = !(parseInt(cardAttr1, 10)
     > 90 || parseInt(cardAttr1, 10) < 0);
    const menorQueZeroa2 = !(parseInt(cardAttr2, 10)
     > 90 || parseInt(cardAttr2, 10) < 0);
    const menorQueZeroa3 = !(parseInt(cardAttr3, 10)
     > 90 || parseInt(cardAttr3, 10) < 0);

    if (campoVazio && maiorQue
      && menorQueZeroa1
      && menorQueZeroa2
      && menorQueZeroa3) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onInputChange=({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.validation();
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}
// iniciando projeto

export default App;
