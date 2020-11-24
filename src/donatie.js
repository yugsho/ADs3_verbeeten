import React, { Component } from "react";
import {Box, Card, TextField, Button, ButtonGroup, Grid, FormControlLabel, Checkbox, Typography, FormControl, Select, InputLabel} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Person from '@material-ui/icons/Person';
import People from '@material-ui/icons/People';
import Euro from '@material-ui/icons/Euro';
import Favorite from '@material-ui/icons/Favorite'

class Donatie extends Component {
  render() {
    return (

<Box className="donatiewrap">
  <Box className="donatieleft">
  <Box className="text-buttonwrap">
    <Grid container direction="column" alignItems="center">

    <TextField className="donatietextfield" style={{backgroundColor: "#FFC2D3", marginBottom:"2vh"}} id="outlined-basic" size="small" label="Zoek deelnemers/teams/kids/vrijwilligers" variant="outlined"/>
    </Grid>

      <Grid container direction="row" justify="space-between" alignItems="flex-start" style={{marginBottom:"2vh"}}>
      <Button style={{backgroundColor: "#C93A3C"}}><a className="donatiebuttoncolor">Deelnemers</a></Button>
      <Button style={{backgroundColor: "#C93A3C"}}><a className="donatiebuttoncolor">Teams</a></Button>
      <Button style={{backgroundColor: "#C93A3C"}}><a className="donatiebuttoncolor">Kids</a></Button>
      <Button style={{backgroundColor: "#C93A3C"}}><a className="donatiebuttoncolor">Vrijwilliger</a></Button>
      </Grid>
</Box>

    <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="center">
    <Grid item xs={4}>
    <Card>
    <AccountCircle fontSize="large"/>
     <h5>Susanne Stadhouder</h5>
     <p>€1558</p>
     <Button size="small" style={{backgroundColor: "#C93A3C"}}><a className="steunbutton">Steun mij!</a></Button>
     </Card>
     </Grid>

     <Grid item xs={4}>
     <Card>
     <AccountCircle fontSize="large"/>
      <h5>Patrik van Herp</h5>
      <p>€977</p>
      <Button size="small" style={{backgroundColor: "#C93A3C"}}><a className="steunbutton">Steun mij!</a></Button>
      </Card>
      </Grid>

      <Grid item xs={4}>
      <Card>
      <AccountCircle fontSize="large"/>
       <h5>Nick van der Wal</h5>
       <p>€843</p>
       <Button size="small" style={{backgroundColor: "#C93A3C"}}><a className="steunbutton">Steun mij!</a></Button>
       </Card>
       </Grid>

       <Grid item xs={4}>
       <Card>
       <AccountCircle fontSize="large"/>
        <h5>Emma Pulles</h5>
        <p>€740</p>
        <Button size="small" style={{backgroundColor: "#C93A3C"}}><a className="steunbutton">Steun mij!</a></Button>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card>
        <AccountCircle fontSize="large"/>
         <h5>Marieke van de Rijt</h5>
         <p>€610</p>
         <Button size="small" style={{backgroundColor: "#C93A3C"}}><a className="steunbutton">Steun mij!</a></Button>
         </Card>
         </Grid>

        <Grid item xs={4}>
        <Card>
        <AccountCircle fontSize="large"/>
         <h5>Susanne Stadhouder</h5>
         <p>€1558</p>
         <Button size="small" style={{backgroundColor: "#C93A3C"}}><a className="steunbutton">Steun mij!</a></Button>
         </Card>
         </Grid>

         <Grid item xs={4}>
         <Card>
         <AccountCircle fontSize="large"/>
          <h5>Patrik van Herp</h5>
          <p>€977</p>
          <Button size="small" style={{backgroundColor: "#C93A3C"}}><a className="steunbutton">Steun mij!</a></Button>
          </Card>
          </Grid>

          <Grid item xs={4}>
          <Card>
          <AccountCircle fontSize="large"/>
           <h5>Nick van der Wal</h5>
           <p>€843</p>
           <Button size="small" style={{backgroundColor: "#C93A3C"}}><a className="steunbutton">Steun mij!</a></Button>
           </Card>
           </Grid>

           <Grid item xs={4}>
           <Card>
           <AccountCircle fontSize="large"/>
            <h5>Emma Pulles</h5>
            <p>€740</p>
            <Button size="small" style={{backgroundColor: "#C93A3C"}}><a className="steunbutton">Steun mij!</a></Button>
         </Card>
         </Grid>

     </Grid>
     </Box>

  <Box className="donatieright" style={{backgroundColor: "#FFC2D3"}} >

    <Grid container direction="column" justify="space-between" alignItems="baseline">
    <h1 style={{fontSize:"2.2vw"}}> Doneren </h1>

    <p style={{fontSize:"1.2vw"}}> Iedere euro brengt ons dichterbij het doel: kanker effectief bestrijden in eigen regio.
        Wij schenken de opbrengst aan het Verbeeten Fonds, dat er op toeziet dat het geld optimaar wordt besteed.
        Wij stellen elke donatie enorm op prijs
        Als je klaar bent met betalen, klik niet weg, maar wacht tot je weer terug bent op de Verbeeten Challenge site.
        Dan pas is je account volledig geactiveerd</p>

    <Grid container directon="row">
    <Grid item xs={1}>
    <Person />
    </Grid>
    <Grid item xs={11}>
    <Button size="small"><a>Sponsor een deelnemer</a></Button>
    </Grid>
    </Grid>
    <Grid container directon="row">
    <Grid item xs={1}>
    <People />
    </Grid>
    <Grid item xs={11}>
    <Button size="small"><a>Sponsor een team</a></Button>
    </Grid>
    </Grid>
    <Grid container directon="row">
    <Grid item xs={1}>
    <Euro />
    </Grid>
    <Grid item xs={11}>
    <Button size="small"><a>Sponsor direct</a></Button>
    </Grid>
    </Grid>
    <Grid container directon="row">
    <Grid item xs={1}>
    <Favorite />
    </Grid>
    <Grid item xs={11}>
    <Button size="small"><a>Word vriend van de Verbeeten Challenge</a></Button>
    </Grid>
    </Grid>

    <Grid container item direction="row" justify="space-between" alignItems="flex-start" style={{marginBottom:"1vh"}}>
    <Button style={{backgroundColor: "white"}}><a>€5</a></Button>
    <Button style={{backgroundColor: "white"}}><a>€10</a></Button>
    <Button style={{backgroundColor: "#C93A3C"}}><a className="donatiebuttoncolor">€15</a></Button>
    </Grid>

    <TextField className="donatietextfield" style={{backgroundColor: "white", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Ander bedrag invullen" variant="outlined"/>

    <FormControl style={{width:"100%"}}>
        <InputLabel htmlFor="age-native-simple">Kies deelnemer of sponsor direct</InputLabel>
        <Select native>
          <option aria-label="None" value="" />
          <option>Sponsor direct</option>
          <option>Emma Pulles</option>
          <option>Patrik van Herp</option>
        </Select>
      </FormControl>

    <FormControl style={{width:"100%"}}>
        <InputLabel htmlFor="age-native-simple">Selecteer uw bank</InputLabel>
        <Select native>
          <option aria-label="None" value="" />
          <option>ING</option>
          <option>Rabobank</option>
          <option>ABN Amro</option>
        </Select>
      </FormControl>

    <h1 style={{fontSize:"1.8vw"}} className="donatiebloktekst">Gegevens</h1>
    <TextField className="donatietextfield" style={{backgroundColor: "white", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Naam" variant="outlined"/>
    <TextField className="donatietextfield" style={{backgroundColor: "white", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Bedrijfsnaam" variant="outlined"/>
    <TextField className="donatietextfield" style={{backgroundColor: "white", marginBottom:"1vh"}} id="outlined-basic" size="small" label="E-mailadres" variant="outlined"/>
    <TextField className="donatietextfield" style={{backgroundColor: "white", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Persoonlijk bericht" variant="outlined"/>

    <Grid item xs={12}>
    <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        labelStyle={{color: '#C93A3C'}}
        label={<Typography style={{ color: '#C93A3C' }}>Anoniem doneren</Typography>}
        labelPlacement="end"/>
    </Grid>

    <Button size="small" style={{backgroundColor: "#C93A3C"}}><a className="donatiebuttoncolor">Doneer</a></Button>

    </Grid>
  </Box>
</Box>
    );
  }
}

export default Donatie;
