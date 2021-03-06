import React, {Component} from 'react';
import Menuitem from '../menuItem/menuItem';
import './menu.css';

class Menu extends Component {
    render() {
        const { items, onAdd } = this.props;
        console.log(items);
        return (
            <div className = "menu">
                <h2 className = "title">Menu</h2>
                {items.map(item =>
                    <MenuItem item = {item} onAdd = {onAdd} key = {item.id}></MenuItem>
                )}
            </div>
        );
    }

}
export default Menu;