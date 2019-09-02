import React, {Component} from 'react';
import styles from './navbar.css';
import Cart from '../cart/cart';
import Drawer from '@material-ui/core/Drawer';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as CartIcon } from './cart_icon.svg';

class Navbar extends Component {
    render() {
        const { onDelete, cart, open, toggleDrawer } = this.props;
        return (
            <div className = "navbar ">
                <Logo  className = 'logo'/>
                <div className = 'items'>
                    <div className = "item">MENU</div>
                    <div className = "item">BEVERAGES</div>
                    <div className = "item">GIFTS</div>
                    <div className = "item" style = {{paddingRight: "20px", paddingLeft: "12px"}}>|</div>
                    <div style = {{color: "var(--main-bg-color)", width: "60px"}} className = "cartSection button" onClick={toggleDrawer(true)}><CartIcon className = "cartIcon"/><span>CART</span></div>
                </div>
                <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                    <Cart cart = { cart } toggleDrawer = {toggleDrawer} onDelete = {onDelete} />
                </Drawer>
            </div>
        );
    }

}
export default Navbar;