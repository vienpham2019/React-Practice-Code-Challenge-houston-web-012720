import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      ate_sushis: [], 
      remaining_money: 100,
      empty_plates_arr: []
    }
  }

  componentDidMount(){
    const API = "http://localhost:3000/sushis"
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({sushis}))
  }

  shuffle = array => {
    let length = array.length - 1
    let shuffle_arr = []
    for(let i = length; i >= 0 ; i --){
      shuffle_arr.push(array.splice(Math.floor(Math.random() * i),1)[0])
    }
    return shuffle_arr 
}

  randomSushi = () => {
    let sushis = this.state.sushis
    let ate_sushis = this.state.ate_sushis 
    let avaliable_sushis = sushis.filter(sushi => !ate_sushis.includes(sushi))
    let shuffle_arr = this.shuffle(avaliable_sushis)
    this.setState({
      sushis: shuffle_arr
    })
  }

  eat_sushi = (sushi) => {
    let update_remain_money = this.state.remaining_money - sushi.price
    let update_empty_plates_arr = [...this.state.empty_plates_arr,"empty plate"]
    let ate_sushis = [...this.state.ate_sushis,sushi]
    this.setState({
      ate_sushis,
      remaining_money: update_remain_money,
      empty_plates_arr: update_empty_plates_arr
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushis} 
          randomSushi = {this.randomSushi} 
          remaining_money = {this.state.remaining_money} 
          eat_sushi = {this.eat_sushi}
        />

        <Table 
          remaining_money = {this.state.remaining_money}  
          empty_plates_arr = {this.state.empty_plates_arr}
        />
      </div>
    );
  }
}

export default App;