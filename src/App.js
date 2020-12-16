import React from 'react';
import logo from './logo.svg';
import {ErrorBoundary} from 'react-error-boundary';
import Game from './components/Game';




function ErrorPage() {
  return (<div>아앗 에러가 났다.</div>);
}

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Game />
    </div>
  );
  }
  
}

export default App;
