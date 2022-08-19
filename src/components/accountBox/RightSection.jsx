import React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Route} from "react-router-dom";
import Predictor from "./predictor";
import Application from "../containers/Application";
import withWidth from "@material-ui/core/withWidth";
import Loans from "../containers/Loans";
import MobileHeader from "./MobileHeader";
import { LoginForm } from "../containers/LoginForm";
import { SignupForm } from "../containers/SignupForm";


const styles = theme => createStyles({
    root: {
        padding: 20,
    }
});

const RightSection = (props) => {
    const {classes} = props;
    return (
        <div>
            <MobileHeader isOpen={props.isDrawerOpen} toggleDrawer={props.toggleDrawer}/>
            <div className={classes.root}>
                <Route path="/" exact element={LoginForm} width={props.width}/>
                <Route path="/login" element={LoginForm} />
                <Route path="/signup" element={SignupForm} />
                <Route path="/predict" component={Predictor} width={props.width}/>
                <Route path="/apply" component={Application} />
                <Route path="/loans" component={Loans} />
            </div>
        </div>
    );
};


export default withWidth()(withStyles(styles)(RightSection));