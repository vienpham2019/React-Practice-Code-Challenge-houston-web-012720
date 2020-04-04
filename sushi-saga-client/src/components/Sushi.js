import React, { Component } from 'react'

class Sushi extends Component{
  constructor(props){
    super()
    this.state = {
      sushi: props.sushi,
      taken: false
    }
  }

  handleClick = (sushi) => {
    this.setState({
      taken: true
    })

    this.props.eat_sushi(sushi)
  }

  render(){
    let sushi = this.props.sushi
    return (
      <div className="sushi">
        <div className="plate" onClick={() => this.props.remaining_money >= sushi.price ? this.handleClick(sushi) : null}>
          { 
            this.state.taken ? null : <img src={sushi.img_url} width="100%" alt="sushi img"/>
          }
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi