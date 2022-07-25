import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div className="formaulario">
        <h1>Adicionar Nova Carta</h1>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
            id="descricao"
          />
        </label>

        <label htmlFor="number1">
          Attr01
          <input
            data-testid="attr1-input"
            type="number"
            id="number1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="number2">
          Attr01
          <input
            data-testid="attr2-input"
            type="number"
            id="number2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="number3">
          Attr01
          <input
            data-testid="attr3-input"
            type="number"
            id="number3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="select">
          Raridade
          <select
            data-testid="rare-input"
            id="select"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro" selected>raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="imagem">
          Super Trybe Tryunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="check"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          className="btn"
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
