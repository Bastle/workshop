import React from 'react';

export default class MouseTracker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleMouseMove(e){
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  componentDidMount(){
    window.addEventListener('mousemove', this.handleMouseMove);
  }
  componentWillUnmount(){
    window.removeEventListener('mousemove', this.handleMouseMove);
  }
  render(){
    return (
      <div>
        {this.props.render(this.state)}
      </div>
    )
  }
}
