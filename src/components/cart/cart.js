import React, {Component} from 'react';
import Cartitem from '../cartitem/cartitem';
import styles from './cart.css';
import Button from "@material-ui/core/Button";

class Cart extends Component {
    render() {
        const buttonStyle = {color: "white", backgroundColor: "#3B8873", boxShadow: 'none', fontFamily: "Poppins", textTransform: 'none', height: "2.7rem", fontSize: 12, width: "100%", borderRadius: "5px"};
        const { cart, toggleDrawer, onDelete } = this.props;
        var total = 0.00;
        for (var i = 0; i < cart.length; i++) {
            total+=cart[i].price;
        }
        console.log(cart.length);
        return (
            <div className = "cart">
                <div className = "close" onClick = {toggleDrawer(false)}><p>Close</p></div>
                <br/><h2 className = "title">My Cart</h2>
                {cart.map(item =>
                    <Cartitem onDelete = {onDelete} item = {item} key = {item.id}></Cartitem>
                )}
                <h3 className = "h3">Total</h3>
                <h3 className = "h3" style = {{float: "right"}}>${total}</h3><br/><br/>
                {cart.length === 0
                ? <Button disabled style ={{textTransform: "none", height: "2.7rem", width: "100%", fontFamily: "Poppins"}} variant="contained" >Continue to Checkout</Button>
                : <Button variant="contained" style = {buttonStyle}>Continue to Checkout</Button>
                }
            </div>
        );
    }

}
export default Cart;