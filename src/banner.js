import React from 'react';
import ReactDOM from 'react-dom';
import './banner.css';
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';
import image from './img/banner1.jpg'
import Countdown from './countDown'
import MoneyRaised from './money'
import logo from './img/logoWit.png'

class Banner extends React.Component{
    render(){
        return (
            <div className="banner-wrap">
                <img className="bannerImage" src={image}></img>
                <div className="bannerContent">
                <Grid container spacing={3}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>      
                        <img className="logo" src={logo}></img>
                    </Grid>
                    <Grid item xs={4}>
                        <Button>Inloggen</Button>
                        <PersonIcon></PersonIcon>
                        <form className="classes.root" noValidate autoComplete="of">
                        <TextField id='standard-basic' label="Zoeken" />
                        </form>
                    </Grid>
                    <Grid container direction="row" justify="space-evenly" >
                        <p>Evenement</p>
                        <p>Thuis challenge</p>
                        <p>Deelnemers</p>
                        <p>Over ons</p>
                        <p>Spnsors</p>
                        <p>Foto's</p>
                        <Button variant="contained">Doneer</Button>
                        <Button variant="contained">Doe mee</Button>
                    </Grid>
                    <Grid item xs={12}><h1>Samen sportief tegen kanker</h1></Grid>
                    <Grid item xs={12} container direction="row" justify="space-around">
                        <Grid item xs={5}>
                            <Countdown className="countdown"></Countdown>
                        </Grid>
                        <Grid item xs={5}>
                            <MoneyRaised></MoneyRaised>
                        </Grid>
                    </Grid>
                  
               
                </Grid>
                </div>

            </div>
        );
    }
}

ReactDOM.render(< Banner />, document.getElementById('root'));
