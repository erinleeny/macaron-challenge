import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import giftbox from './components/menuItem/giftbox.png';
import rose from './components/menuItem/rose.png';
import vanilla from './components/menuItem/vanilla.png';
class App extends Component {

  constructor () {
    super();
    this.state = {
      items: [
        {id: 1, added: 0, price: 55.00, name: "Custom Gift Box", imgUrl: giftbox, amount: "Assorted Flavors", text: "This 16 piece gift box is perfect for birthdays, anniversaries or just for yourself! Customize your flavors or pick from our three gift boxes!"},
        {id: 2, added: 0, price: 3.75, name: "Vanilla Earl Grey Macaron", imgUrl: vanilla, amount: "1 piece", text: "Our most popular flavor! Each macaron is filled with earl grey ganache."},
        {id: 3, added: 0, price: 3.75, name: "Rose Macarons", imgUrl: rose, amount: "1 piece", text: "Our most romantic flavor! Filled with the lightest, sweetest rose ganache, this macaron will definitely be a pleasant surprise."},
      ],
      cart: [],
      drawer: false,
    };
  }
  toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ ...this.state, drawer: open });
  };

  handleAdd = (item) => {
    console.log(this.state.cart);
    console.log(item);
    this.state.cart.push(item);
    if (item.added) {
      item.added = 0;
    }
    else {
      item.added = 1;
    }
    this.setState(this.state.items);
  }
  handleDelete = (item) => {
    const cart = this.state.cart.filter(c => c.id !== item.id);
    item.added = 0;
    this.setState({ cart, item });
  };
  render() {
    return (
        <div className="App">
          <Navbar toggleDrawer = {this.toggleDrawer} open = {this.state.drawer} cart = {this.state.cart} onDelete = {this.handleDelete} />
          <Menu items = {this.state.items} onAdd = {this.handleAdd}  />
          <Footer />
        </div>
    );
  }
}

export default App;
