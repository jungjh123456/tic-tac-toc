import React from 'react';
import logo from './logo.svg';
import {ErrorBoundary} from 'react-error-boundary';




function ErrorPage() {
  return (<div>아앗 에러가 났다.</div>);
}

class App extends React.Component {
  render() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
    <div className="App">
      
      하이연
    
    </div>
    </ErrorBoundary>
  );
  }
  
}

export default App;
