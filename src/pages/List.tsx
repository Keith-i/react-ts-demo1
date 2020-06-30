import React from 'react'
import ListView from '../components/ListView'

interface IState {
  dataInfo: {
    items: []
  }
}

export default class List extends React.Component<{}, IState> {

  constructor(props:any) {
    super(props)
    this.state = {
      dataInfo: {
        items: []
      }
    }
  }

  public componentDidMount() {
    fetch(`https://api.github.com/search/commits?q=repo:facebook/react+css&page=1`, {
      method: 'GET',
      headers: new Headers({ 'Accept': 'application/vnd.github.cloak-preview' })
    })
    .then(data => data.json())
    .then(response => {
      console.log(response)
      this.setState({
        dataInfo: {
          items: response.items
        }
      })
    })
    .catch(error => console.log(error))
  }

  public render() {
    return(
      <div>
        {/* {JSON.stringify(this.state.dataInfo.items)} */}
        {
          this.state.dataInfo.items.length > 0 ?
          <ul>
            {
              this.state.dataInfo.items.map((element, index) => {
                return <ListView key={index} data={element} />
              })
            }
          </ul>
          :
          <div>数据正在请求</div>
        }
      </div>
    )
  }
}