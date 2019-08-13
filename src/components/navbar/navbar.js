import React, {Component} from 'react';
import styles from './navbar.css';
import Cart from '../cart/cart';
import Drawer from '@material-ui/core/Drawer';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as CartIcon } from './cart_icon.svg';

class Navbar extends Component {
    render() {
        console.log(this.props);
        return (
            <div className = "navbar ">
                <Logo  className = 'logo'/>
                <div className = 'items'>
                    <div className = "item">MENU</div>
                    <div className = "item">BEVERAGES</div>
                    <div className = "item">GIFTS</div>
                    <div className = "item">|</div>
                    <div style = {{color: "#3c3e40"}} className = "item button" onClick={this.props.toggleDrawer(true)}><CartIcon className = "cartIcon"/><span>CART</span></div>
                </div>
                <Drawer anchor="right" open={this.props.open} onClose={this.props.toggleDrawer(false)}>
                    <Cart cart = { this.props.cart } toggleDrawer = {this.props.toggleDrawer} />
                </Drawer>
            </div>
        );
    }

}
export default Navbar;