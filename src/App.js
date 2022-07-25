import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Card />
        <Form />
      </div>
    );
  }
}
// iniciando projeto

export default App;
