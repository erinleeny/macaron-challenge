import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import styles from "./cartitem.css";

class Cartitem extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={2} className = "cartitem">
                    <Grid item xs = {4}><img className = "smallimg" style = {{width: 80, height: "auto"}} src = {this.props.item.imgUrl}/></Grid>
                    <Grid item xs = {5} className = "box" style = {{position: "relative", height: 70}}><div>
                    <h2 style = {{fontWeight: 500, color: "rgba(35, 121, 88, 0.75)", marginTop: 0, marginBottom: "-0.3rem", fontSize: 14, lineHeight: 1}}>{this.props.item.name}</h2>
                    <h3 style = {{fontWeight: 500, fontSize: 10, color: "dark", marginTop: 7, marginBottom: 0}} >{this.props.item.amount}</h3>
                    <span style = {{fontWeight: 500, fontSize: 10, color: "dark", marginTop: 0, bottom: 1, position: "absolute"}} >Remove</span></div>
                    </Grid><br/>
                    <Grid item xs = {3}><h3 className = "priceTag">${this.props.item.price}</h3></Grid>
                </Grid>
                <hr></hr>
            </div>






        )
    }
}



export default Cartitem;