import React, {Component} from 'react';
import styles from './menuItem.css';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import Grid from '@material-ui/core/Grid';

class Menuitem extends Component {
    render() {
        const {item, onAdd} = this.props;
        const buttonStyle = {color: "white", backgroundColor: "#3B8873", boxShadow: 'none', fontFamily: "Poppins", textTransform: 'none', height: "2.7rem", fontSize: 12, width: "80%", borderRadius: "5px"};
        const clickedStyle = {color: "white", backgroundColor: "#2EAE82", boxShadow: 'none', fontFamily: "Poppins", textTransform: 'none', height: "2.7rem", fontSize: 12, width: "80%", borderRadius: "5px"}
        return (
            <React.Fragment>
            <Grid container className = "menuItem">
                {this.props.children}
                <Grid xs = {2}><img className = "img" src = {item.imgUrl}/></Grid>
                <Grid xs = {6}><div className = "box">
                    <h2 className = "h2" style = {{fontWeight: 500, color: "rgba(35, 121, 88, 0.75)", marginTop: "-1rem"}}>{item.name}</h2>
                    <h3 className = "amount" >{item.amount}</h3>
                    <h3 style = {{fontWeight: 200}}>{item.text}</h3>
                </div></Grid><br/>
                <Grid xs = {1}/>
                <Grid xs = {3}><div className = "price">
                    <br/><h3 className = "priceName">${item.price}/ea.</h3>
                    {item.added
                        ? <Button style = {clickedStyle}><span className = "buttonText"><DoneIcon style = {{fontSize: 13, marginBottom: -3, paddingRight: "0.3rem"}} />Added to Cart</span></Button>
                        : <Button onClick = {() => onAdd(item)} variant="contained" style = {buttonStyle} ><span className = "buttonText">+ Add to Cart</span></Button>
                    }
                </div></Grid>
            </Grid>
                <hr/>
            </React.Fragment>
        );
    }

}
export default Menuitem;