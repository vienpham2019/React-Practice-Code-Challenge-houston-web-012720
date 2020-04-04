import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

export default class SushiContainer extends Component{

  displaySushis = () => {
    let newArr = this.props.sushis.slice(0,4)
    return newArr.map(sushi => 
      <Sushi 
        sushi={sushi} 
        eat_sushi = {this.props.eat_sushi}
        remaining_money = {this.props.remaining_money}
        key = {sushi.id}
      />)
  }

  render() {
    return (
      <div className="belt">
        {
          this.displaySushis()
        }
        <MoreButton randomSushi = {this.props.randomSushi}/>
      </div>
    )
  }
}
