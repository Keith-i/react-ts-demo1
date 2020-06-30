import React from 'react'

interface IProps {
  title: string,
  age: number,
  sex?: string
}

// 通过接口声明状态
interface IState {
  count: number
}

export default class Hello extends React.Component<IProps, IState> {

  public constructor(props:IProps) {
    super(props)
    this.state = {
      count: 1000
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  // 实现state
  // public readonly state: Readonly<IState> = {
  //   count: 1000
  // }

  public clickHandler() {
    this.setState({
      count: 2000
    })
  }
  
  public render() {
    const { title, age, sex } = this.props
    return(
      <div>
        <div>Hello：{title}, {age}, {sex}</div>
        <div>
          { this.state.count }
          <button onClick={ this.clickHandler }>按钮</button>
        </div>
      </div>
    )
  }
}
