import React, {Component} from 'react';
import Cartitem from '../cartitem/cartitem';
import styles from './cart.css';
import Button from "@material-ui/core/Button";

class Cart extends Component {
    render() {
        const buttonStyle = {color: "white", backgroundColor: "rgba(35, 121, 88, 0.75)", boxShadow: 'none', fontFamily: "Poppins", textTransform: 'none', height: "2.7rem", fontSize: 12, width: "100%", borderRadius: "5px"};
        const { cart } = this.props;
        var total = 0.00;
        for (var i = 0; i < cart.length; i++) {
            total+=cart[i].price;
        }
        return (
            <div className = "cart">
                <p>Close</p>
                <br/><h2 className = "title">My Cart</h2>
                {cart.map(item =>
                    <Cartitem item = {item} key = {item.id}></Cartitem>
                )}
                <h3 className = "h3">Total</h3>
                <h3 className = "h3" style = {{float: "right"}}>${total}</h3>
                <br/><br/><Button onClick = {() => this.props.onAdd(this.props.item)} variant="contained" style = {buttonStyle} >Continue to Checkout</Button>
            </div>
        );
    }

}
export default Cart;