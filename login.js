import React from 'react';
import './login.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default class Login extends React.Component{
    render(){
        return(
            <div className="loginForm">
                <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={5}
                >
                    <Grid item>
                        <h2>INLOGGEN</h2>
                        <p>Voer uw gegeven in om in te loggen</p>
                    </Grid>
                    <Grid item>
                    <TextField className="textField" label="Gebruikersnaam" variant="outlined"></TextField>
                    </Grid>
                    <Grid item>
                        <TextField className="textField"  label="Wachtwoord" variant="outlined"></TextField>
                    </Grid>
                    <Grid item>
                        <Button><p>Wachtwoord vergeten?</p></Button>
                    </Grid>
                    <Grid>
                        <Button variant="contained" style={{backgroundColor: "#C93A3C", color: "white", width: "400px"}}>inloggen</Button>
                    </Grid>
                    <Grid item>
                        <Button ><p>Nog geen lid? meld je aan!</p></Button>
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}
