import React from 'react';
import Hello from './components/Hello'
import List from './pages/List'

class App extends React.Component {

  myClickHandler(data:string) {
    console.log('App event:', data)
  }

  render() {
    return (
      <div className="App">
        <p>Hello React TypeScript</p>
        <Hello title="标题" age={20} onMyClick={this.myClickHandler} />
        <List />
      </div>
    )
  }
}

export default App;
