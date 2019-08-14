import React, {Component} from 'react';
import styles from './footer.css';
import Grid from '@material-ui/core/Grid';
import {ReactComponent as Facebook} from "./facebook_icon.svg";
import {ReactComponent as Twitter} from "./twitter_icon.svg";
import {ReactComponent as Instagram} from "./instagram_icon.svg";
class Footer extends Component {
    render() {
        return (
            <div className = "footer">
                <Grid container spacing={2}>
                    <Grid xs = {5} className = "box1">
                        <h2 className = "first">We are committed to serving the freshest, most delightful treats.</h2>
                        <div className = "icons"><Facebook/><Instagram/><Twitter/></div>
                        <h3 className="copyright">C 2019 MACARONS</h3>
                    </Grid>
                    <Grid xs = {3}/>
                    <Grid xs = {2} className = "box2">
                        <h3 className = "header h3">Company</h3>
                        <h3 className = "h3">About</h3>
                        <h3 className = "h3">Locations</h3>
                        <h3 className = "h3">Contact Us</h3>
                    </Grid>
                    <Grid xs = {2} className = "box2">
                        <h3 className = "header h3">Orders</h3>
                        <h3 className = "h3">Order Tracker</h3>
                        <h3 className = "h3">Delivery FAQs</h3>
                    </Grid>
                </Grid>
            </div>
        );
    }

}
export default Footer;