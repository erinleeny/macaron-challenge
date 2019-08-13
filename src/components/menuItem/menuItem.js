import React, {Component} from 'react';
import styles from './menuItem.css';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';

class Menuitem extends Component {
    render() {
        const buttonStyle = {color: "white", backgroundColor: "rgba(35, 121, 88, 0.75)", boxShadow: 'none', fontFamily: "Poppins", textTransform: 'none', height: "2.7rem", fontSize: 12, width: "80%", borderRadius: "5px"};
        const clickedStyle = {color: "white", backgroundColor: "#2EAE82", boxShadow: 'none', fontFamily: "Poppins", textTransform: 'none', height: "2.7rem", fontSize: 12, width: "80%", borderRadius: "5px"}
        return (
            <React.Fragment>
            <div className = "menuItem">
                {this.props.children}
                <img className = "img" src = {this.props.item.imgUrl}/>
                <div className = "box">
                    <h2 style = {{fontWeight: 500, color: "rgba(35, 121, 88, 0.75)", marginBottom: "-1rem"}}>{this.props.item.name}</h2>
                    <h3 style = {{fontWeight: 500, fontSize: 14, color: "dark"}} >{this.props.item.amount}</h3>
                    <h3 style = {{fontWeight: 200}}>{this.props.item.text}</h3>
                </div><br/>
                <div className = "price">
                    <br/><h3 className = "priceName">${this.props.item.price}/ea.</h3>
                    {this.props.item.added
                        ? <Button style = {clickedStyle}><span><DoneIcon style = {{fontSize: 14, marginBottom: -3, paddingRight: "0.3rem"}} />Added to Cart</span></Button>
                        : <Button onClick = {() => this.props.onAdd(this.props.item)} variant="contained" style = {buttonStyle} >+ Add to Cart</Button>
                    }
                </div>
            </div>
                <hr/>
            </React.Fragment>
        );
    }

}
export default Menuitem;