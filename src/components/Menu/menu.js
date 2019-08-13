import React, {Component} from 'react';
import Menuitem from '../menuItem/menuItem';
import './menu.css';

class Menu extends Component {
    render() {
        const { items, onAdd } = this.props;
        console.log(items);
        return (
            <div className = "menu">
                <h2>Menu</h2>
                {items.map(item =>
                    <Menuitem item = {item} onAdd = {onAdd} key = {item.id}></Menuitem>
                )}
            </div>
        );
    }

}
export default Menu;