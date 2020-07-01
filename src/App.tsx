import React from 'react';
import { Button } from 'antd'
import Hello from './components/Hello'
import List from './pages/List'
import './App.less'
// import 'antd/dist/antd.css'

class App extends React.Component {

  myClickHandler(data:string) {
    console.log('App event:', data)
  }

  render() {
    return (
      <div className="App">
        <p>Hello React TypeScript</p>
        <Hello title="标题" age={20} onMyClick={this.myClickHandler} />
        {/* <List /> */}
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
      </div>
    )
  }
}

export default App;
