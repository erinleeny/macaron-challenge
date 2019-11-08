import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import styles from "./cartitem.css";

class Cartitem extends Component {
    render() {
        const { item, onDelete } = this.props;
        return (
            <div>
                <Grid container spacing={2} className = "cartitem">
                    <Grid item xs = {4}><img className = "smallimg" style = {{width: 80, height: "auto"}} src = {item.imgUrl}/>
                </Grid>
                <Grid item xs = {5} className = "box" style = {{position: "relative", height: 70}}>
                    <div>
                        <h2 style = {{fontWeight: 500, color: "rgba(35, 121, 88, 0.75)", marginTop: 0, marginBottom: "-0.3rem", fontSize: 14, lineHeight: 1}}>{item.name}</h2>
                        <h3 style = {{fontWeight: 500, fontSize: 10, color: "dark", marginTop: 7, marginBottom: 0}} >{item.amount}</h3>
                        <span
                            className = "span"
                            onClick = {(itemId) => {onDelete(item)}}
                            >Remove
                        </span>
                    </div>
                </Grid><br/>
                <Grid item xs = {3}><h3 className = "priceTag">${item.price}</h3></Grid>
                </Grid>
                <hr></hr>
            </div>
        )
    }
}



export default Cartitem;
