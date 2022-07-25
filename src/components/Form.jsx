import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div className="formaulario">
        <h1>Adicionar Nova Carta</h1>
        <label htmlFor="name">
          Nome
          <input data-testid="name-input" type="text" id="name" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input data-testid="description-input" type="textarea" id="descricao" />
        </label>

        <label htmlFor="number1">
          Attr01
          <input data-testid="attr1-input" type="number" id="number1" />
        </label>
        <label htmlFor="number2">
          Attr01
          <input data-testid="attr2-input" type="number" id="number2" />
        </label>
        <label htmlFor="number3">
          Attr01
          <input data-testid="attr3-input" type="number" id="number3" />
        </label>
        <label htmlFor="imagem">
          Imagem
          <input data-testid="image-input" type="text" id="imagem" />
        </label>
        <label htmlFor="select">
          Raridade
          <select data-testid="rare-input" id="select">
            <option value="normal">normal</option>
            <option value="raro" selected>raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="imagem">
          Super Trybe Tryunfo
          <input data-testid="trunfo-input" type="checkbox" id="check" />
        </label>
        <button className="btn" data-testid="save-button" type="submit"> Salvar</button>
      </div>
    );
  }
}

export default Form;
