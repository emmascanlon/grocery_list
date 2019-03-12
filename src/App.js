import React, { Component } from 'react';
import './App.css';
import List from './List';
import GroceryForm from './GroceryForm';

class App extends Component {
  state = { items: [], };

  getId = () => {
    return Math.floor((1 + Math.random()) * 1000)
  };

  addThing = (name) => {
    const item = { name, id: this.getId(), purchased: false, }
    this.setState({
      items: [item, ...this.state.items]
    }) 
  };

  handleClick = (id) => {
    this.setState({
    items: this.state.items.map( item => {
           if (item.id === id) {
          return {
            ...item,
            purchased: !item.purchased, }
          }
            return item;
          })
        })
      }


    render() {
      return (
        <div className="App">
          <GroceryForm addThing={this.addThing} />
          <List name="Grocery List" things={this.state.items} handleClick={this.handleClick}/>
         </div>
      );
    }
  }




export default App;
