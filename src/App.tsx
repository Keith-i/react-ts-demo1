import React from 'react';
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <p>Hello React TypeScript</p>
      <Hello title="标题" age={20} />
    </div>
  );
}

export default App;
