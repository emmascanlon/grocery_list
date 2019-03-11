import React, { Component } from 'react';
import './App.css';
import List from './List';
import GroceryForm from './GroceryForm';

class App extends Component {
  state = { groceries: [] }

  getId = () => {
    return Math.floor((1 + Math.random())* 1000)}
  
  addItem = (name) => {
      const {groceries} = this.state;
      const item = {name, id: this.getId(), purchased: false }
      this.setState({ groceries: [item, ...groceries] });
 
  
  render() {
    const {groceries} = this.state;
    return (
      <div className="App">
      <GroceryForm addItem={this.addItem} />
      <List name = "Grocery List" items={groceries} />
      </div>
    );
  }
}


export default App;
