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
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    arrayDeCartas: [],
    hasTrunfo: false,
  }

  onSaveButtonClick =(event) => {
    event.preventDefault();
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.state;

    const card = {
      nome: cardName,
      descricao: cardDescription,
      atributo01: cardAttr1,
      atributo02: cardAttr2,
      atributo03: cardAttr3,
      imagem: cardImage,
      raro: cardRare,
      trunfo: cardTrunfo,
    };

    this.setState((prevState) => ({
      arrayDeCartas: [...prevState.arrayDeCartas, card],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
    }));
    console.log(cardTrunfo);
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
  }

  validation= () => {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare } = this.state;
    const duzentosEDez = 210;
    const noventa = 90;
    const campoVazio = !!cardName && !!cardDescription && !!cardImage && !!cardRare;
    const maiorQue = parseInt(cardAttr1, 10)
          + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10) <= duzentosEDez;
    const menorQueZeroa1 = !(parseInt(cardAttr1, 10)
     > noventa || parseInt(cardAttr1, 10) < 0);
    const menorQueZeroa2 = !(parseInt(cardAttr2, 10)
     > noventa || parseInt(cardAttr2, 10) < 0);
    const menorQueZeroa3 = !(parseInt(cardAttr3, 10)
     > noventa || parseInt(cardAttr3, 10) < 0);

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
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [target.name]: value }, () => {
      this.validation();
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo, arrayDeCartas } = this.state;

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
          hasTrunfo={ hasTrunfo }
        />
        {(arrayDeCartas.length !== 0)
        && arrayDeCartas.map((carta, index) => (<Card
          key={ `${cardName} ${index}` }
          cardName={ carta.nome }
          cardDescription={ carta.descricao }
          cardAttr1={ carta.atributo01 }
          cardAttr2={ carta.atributo02 }
          cardAttr3={ carta.atributo03 }
          cardImage={ carta.imagem }
          cardRare={ carta.raro }
          cardTrunfo={ carta.trunfo }
        />))}
      </div>

    );
  }
}
// iniciando projeto

export default App;
