import React from 'react';
import './login.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default class register extends React.Component{
    render(){
        return(
            <div className="loginForm">
                <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
                >
                    <Grid item>
                        <h2>REGISTREER</h2>
                        <p>Voer uw gegeven in om in te registreren</p>
                    </Grid>
                    <Grid item>
                    <TextField className="textFieldHalf" label="Voornaam" variant="outlined"></TextField>
                    <TextField className="textFieldHalf"  label="Achternaam" variant="outlined"></TextField>
                    </Grid>
                    <Grid item>
                    <TextField className="textField"  label="Email-adres" variant="outlined"></TextField>
                    </Grid>
                    <Grid item>
                    <TextField className="textField" label="Gebruikersnaam" variant="outlined"></TextField>
                    </Grid>
                    <Grid item 
                    container 
                    direction="column" 
                    justify="center"
                    alignItems="center"
                    spacing={3}>
                        <TextField className="textField" label="Wachtwoord" variant="outlined"></TextField>
                        <TextField className="textField" label="Herhaal wachtwoord" variant="outlined"></TextField>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" style={{backgroundColor: "#C93A3C", color: "white", width: "400px"}}>Registreer</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" style={{backgroundColor: "#C93A3C", color: "white", width: "400px"}}>Annuleer</Button>
                    </Grid>
                </Grid>
                
            </div>
        );
    }
}
