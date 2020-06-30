import React from 'react'

interface IProps {
  data: any
}

export default class ListView extends React.Component<IProps> {
  public render() {
    const { data } = this.props
    return (
      <div>
        {data.url}
      </div>
    )
  }
}