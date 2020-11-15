import React, { Component } from "react";
import {Box, Card, TextField, Button, ButtonGroup, Grid, FormControlLabel, Checkbox} from '@material-ui/core';

class Donatie extends Component {
  render() {
    return (
<Box className="donatiewrap">
  <Box className="donatieleft">
  <Box className="text-buttonwrap">
    <Grid container direction="column" alignItems="center">

    <TextField className="donatietextfield" style={{backgroundColor: "white"}} id="outlined-basic" size="small" label="Zoek deelnemers/teams/kids/vrijwilligers" variant="outlined"/>
    </Grid>

      <Grid container direction="row" justify="space-between" alignItems="flex-start">
      <Button style={{backgroundColor: "white"}}><a>Deelnemers</a></Button>
      <Button style={{backgroundColor: "white"}}><a>Teams</a></Button>
      <Button style={{backgroundColor: "white"}}><a>Kids</a></Button>
      <Button style={{backgroundColor: "white"}}><a>Vrijwilliger</a></Button>
      </Grid>
</Box>

    <Grid container spacing={4} direction="row" justify="space-evenly" alignItems="center">
    <Grid item xs={4}>
    <Card>
     <h5>Susanne Stadhouder</h5>
     <p>€1558</p>
     </Card>
     </Grid>

     <Grid item xs={4}>
     <Card>
      <h5>Patrik van Herp</h5>
      <p>€977</p>
      </Card>
      </Grid>

      <Grid item xs={4}>
      <Card>
       <h5>Nick van der Wal</h5>
       <p>€843</p>
       </Card>
       </Grid>

       <Grid item xs={4}>
       <Card>
        <h5>Emma Pulles</h5>
        <p>€740</p>
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card>
         <h5>Marieke van de Rijt</h5>
         <p>€610</p>
         </Card>
         </Grid>

        <Grid item xs={4}>
        <Card>
         <h5>Susanne Stadhouder</h5>
         <p>€1558</p>
         </Card>
         </Grid>

         <Grid item xs={4}>
         <Card>
          <h5>Patrik van Herp</h5>
          <p>€977</p>
          </Card>
          </Grid>

          <Grid item xs={4}>
          <Card>
           <h5>Nick van der Wal</h5>
           <p>€843</p>
           </Card>
           </Grid>

           <Grid item xs={4}>
           <Card>
            <h5>Emma Pulles</h5>
            <p>€740</p>
         </Card>
         </Grid>

     </Grid>
     </Box>

  <Box className="donatieright">

    <Grid container>
    <h1> Doneren </h1>

    <p> Iedere euro brengt ons dichterbij het doel: kanker effectief bestrijden in eigen regio.
        Wij schenken de opbrengst aan het Verbeeten Fonds, dat er op toeziet dat het geld optimaar wordt besteed.
        Wij stellen elke donatie enorm op prijs
        Als je klaar bent met betalen, klik niet weg, maar wacht tot je weer terug bent op de Verbeeten Challenge site.
        Dan pas is je account volledig geactiveerd</p>

    <Grid item xs={12}>
    <Button><a>Sponsor een deelnemer</a></Button>
    </Grid>
    <Grid item xs={12}>
    <Button><a>Sponsor een team</a></Button>
    </Grid>
    <Grid item xs={12}>
    <Button><a>Sponsor direct</a></Button>
    </Grid>
    <Grid item xs={12}>
    <Button><a>Word vriend van de Verbeeten Challenge</a></Button>
    </Grid>


    <Grid item xs={4}>
    <Button><a>€5</a></Button>
    </Grid>
    <Grid item xs={4}>
    <Button><a>€10</a></Button>
    </Grid>
    <Grid item xs={4}>
    <Button><a>€15</a></Button>
    </Grid>

    <TextField className="donatietextfield" style={{backgroundColor: "white"}} id="outlined-basic" size="small" label="Ander bedrag invullen" variant="outlined"/>

    <TextField className="donatietextfield" style={{backgroundColor: "white"}} id="outlined-basic" size="small" label="Kies deelnemer of sponsor direct" variant="outlined"/>
    <TextField className="donatietextfield" style={{backgroundColor: "white"}} id="outlined-basic" size="small" label="Selecteer uw bank" variant="outlined"/>

    <h2>Gegevens</h2>
    <TextField className="donatietextfield" style={{backgroundColor: "white"}} id="outlined-basic" size="small" label="Naam" variant="outlined"/>
    <TextField className="donatietextfield" style={{backgroundColor: "white"}} id="outlined-basic" size="small" label="Bedrijfsnaam" variant="outlined"/>
    <TextField className="donatietextfield" style={{backgroundColor: "white"}} id="outlined-basic" size="small" label="E-mailadres" variant="outlined"/>
    <TextField className="donatietextfield" style={{backgroundColor: "white"}} id="outlined-basic" size="small" label="Persoonlijk bericht" variant="outlined"/>

    <Grid item xs={12}>
    <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="Anoniem doneren"
        labelPlacement="end"/>
    </Grid>

    <Button><a>Doneer</a></Button>

    </Grid>
  </Box>
</Box>
    );
  }
}

export default Donatie;
