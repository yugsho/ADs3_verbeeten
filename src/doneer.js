import React, { Component } from "react";
import {Box, Card, TextField, Button, ButtonGroup, Grid} from '@material-ui/core';

class Doneer extends Component {
  render() {
    return (
  <Box>

  <Grid container item xs={12} justify="center">
  <Grid container item xs={6} direct="column" justify="center">
    <Card style={{backgroundColor: "#FFC2D3", padding:"20px"}}>
      <Grid container item xs={12} justify="center">
        <h1 style={{fontSize:"1.8vw"}}>DEELNEMER SPONSOREN</h1>
      </Grid>

      <Grid container item xs={12} justify="center">
      <p style={{fontSize:"1vw"}}>Iedere euro brengt ons dichterbij het doel: kanker effectief bestrijden in eigen regio.
      Wij schenken de opbrengst aan het Verbeeten Fonds, dat er op toeziet dat het geld optimaal wordt besteed.
      Wij stellen elke donatie enorm op prijs.</p>
      </Grid>

      <Grid container item xs={12} justify="center">
        <TextField style={{backgroundColor: "white", width:"100%", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Kies deelnemer, team of sponsor direct" variant="outlined" />
      </Grid>

      <Grid container item xs={12} justify="space-between" alignItems="center" style={{marginBottom:"1vh"}}>
      <Grid container item xs={4} justify="flex-start" style={{width:"50%"}}>
      <Button style={{backgroundColor: "white"}}><a style={{padding:"0.5vw", paddingLeft:"3vw", paddingRight:"3vw"}}>€5</a></Button>
      </Grid>
      <Grid container item xs={4} justify="center">
      <Button style={{backgroundColor: "white"}}><a style={{padding:"0.5vw", paddingLeft:"3vw", paddingRight:"3vw"}}>€10</a></Button>
      </Grid>
      <Grid container item xs={4} justify="flex-end">
      <Button style={{backgroundColor: "#C93A3C", color:"white"}}><a style={{padding:"0.5vw", paddingLeft:"3vw", paddingRight:"3vw"}}>€15</a></Button>
      </Grid>
      </Grid>



      <Grid container item xs={12} justify="center">
        <TextField style={{backgroundColor: "white", width:"100%", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Ander bedrag invullen" variant="outlined" />
      </Grid>

      <Grid container item xs={12} justify="flex-end">
        <Button style={{backgroundColor: "#C93A3C"}} variant="contained"><a style={{color:"white", fontSize:"1vw"}}>Ga verder</a></Button>
        </Grid>
    </Card>
    </Grid>
  </Grid>

  </Box>
    );
  }
}

export default Doneer;
